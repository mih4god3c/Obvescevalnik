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
		var data = {}
		data.token = "Unauthenticated"
		res.status(403).send(JSON.stringify(data))
		return false
	}

	let idToken
	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
		idToken = req.headers.authorization.split("Bearer ")[1]
	} else {
		var data = {}
		data.token = "Unauthenticated"
		res.status(403).send(JSON.stringify(data))
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
			var data = {}
			data.token = "Unauthenticated"
			console.error(err)
			res.status(403).send(JSON.stringify(data))
			return false
		})
}

export default async function handler(req, res) {
	var data = {}
	await validateFirebaseIdToken(req, res)
		.then((success) => {
			if (!success) throw new Error("Unauthenticated")
			return firestore
				.collection("users")
				.doc(req.user.uid)
				.get()
				.then((response) => {
					return response.data()
				})
		})
		.then((response) => {
			data.success = true
			data.data = response
			res.status(200).send(JSON.stringify(data))
		})
		.catch((err) => {
			if (err.message !== "Unauthenticated") {
				console.error(err)
				res.status(500).send({ error: "Internal server error" })
			}
		})
}
