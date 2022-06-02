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
					.collection("arhiv")
					.doc(req.body.id)
					.get()
					.then((response) => {
						return response.data()
					})
			})
			.then((response) => {
				if (!response) throw new Error("Unauthenticated")
				return firestore
					.collection("arhiv")
					.doc(req.body.id)
					.collection("ocene")
					.doc(req.user.uid)
					.get()
					.then((r) => {
						const data = r.data()
						response.trenutnaOcena = data ? data.ocena : 0
						response.jeOcenjen = !!data
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
				return firestore
					.collection("arhiv")
					.doc(req.body.id)
					.collection("ocene")
					.doc(req.user.uid)
					.set({
						ocena: req.body.ocena,
						timestamp: Date.now()
					})
					.then(() => {
						return response
					})
			})
			.then((response) => {
				return firestore
					.collection("arhiv")
					.doc(req.body.id)
					.update({
						ocena: (response.ocena ? response.ocena : 0) + req.body.ocena - response.trenutnaOcena,
						steviloOcen: Firestore.FieldValue.increment(response.jeOcenjen ? 0 : 1),
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
