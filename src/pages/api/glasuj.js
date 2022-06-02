import Firestore from "@google-cloud/firestore"
import firebase from "firebase-admin"

if (process.env.NODE_ENV !== "production") {
	process.env.GOOGLE_APPLICATION_CREDENTIALS = "./config/service_account.json"
}

const firestore = new Firestore({
	projectId: "tpo-skupina-24",
})
if (!firebase.apps.length) {
	firebase.initializeApp()
}

const validateFirebaseIdToken = async (req, res) => {
	if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
		return false
	}

	let idToken
	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
		idToken = req.headers.authorization.split("Bearer ")[1]
	} else {
		return false
	}

	return firebase
		.auth()
		.verifyIdToken(idToken)
		.then((decodedIdToken) => {
			req.user = decodedIdToken
			req.token = idToken
			return true
		})
		.catch((err) => {
			console.error(err)
			return false
		})
}

export default async function handler(req, res) {
	var data = {}
	if (req.body.id) {
		await validateFirebaseIdToken(req, res)
			.then((success) => {
				if (!success) throw new Error("Unauthenticated")
				return firestore
					.collection("predlogi")
					.doc(req.body.id)
					.get()
					.then((response) => {
						return response.data()
					})
			})
			.then((response) => {
				if (!response) throw new Error("Unauthenticated")
				return firestore
					.collection("predlogi")
					.doc(req.body.id)
					.collection("vsecki")
					.doc(req.user.uid)
					.get()
					.then((r) => {
						if (r.data()) {
							response.jeVseckan = true
						}
						return response
					})
			})
			.then((response) => {
				return firestore
					.collection("predlogi")
					.doc(req.body.id)
					.collection("nevsecki")
					.doc(req.user.uid)
					.get()
					.then((r) => {
						if (r.data()) {
							response.jeNevseckan = true
						}
						return response
					})
			})
			.then((response) => {
				return firestore
					.collection("users")
					.doc(response.avtor)
					.get()
					.then((r) => {
						response.avtor = r.data()
						return response
					})
			})
			.then((response) => {
				let edits = []
				if (response.jeVseckan) {
					edits.push(firestore.collection("predlogi").doc(req.body.id).collection("vsecki").doc(req.user.uid).delete())
				} else if (req.body.glas === "vsecek") {
					edits.push(
						firestore.collection("predlogi").doc(req.body.id).collection("vsecki").doc(req.user.uid).set({
							timestamp: Date.now(),
						})
					)
				}
				if (response.jeNevseckan) {
					edits.push(firestore.collection("predlogi").doc(req.body.id).collection("nevsecki").doc(req.user.uid).delete())
				} else if (req.body.glas === "nevsecek") {
					edits.push(
						firestore.collection("predlogi").doc(req.body.id).collection("nevsecki").doc(req.user.uid).set({
							timestamp: Date.now(),
						})
					)
				}

				return Promise.all(edits).then(() => response)
			})
			.then((response) => {
				return firestore
					.collection("predlogi")
					.doc(req.body.id)
					.update({
						vsecki: Firestore.FieldValue.increment(response.jeVseckan ? -1 : req.body.glas === "vsecek" ? 1 : 0),
						nevsecki: Firestore.FieldValue.increment(response.jeNevseckan ? -1 : req.body.glas === "nevsecek" ? 1 : 0),
					})
			})
			.then(() => {
				data.success = true
				res.status(200).send(data)
			})
			.catch((err) => {
				if (err.message !== "Unauthenticated") {
					console.error(err)
					res.status(500).send({ error: "Internal server error" })
				}
			})
	} else {
		res.status(400).send({ error: "Bad request" })
	}
}
