import Firestore from "@google-cloud/firestore"
import firebase from "firebase-admin"
import { v4 as uuidv4 } from "uuid"

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
	if (req.query.pid) {
		await validateFirebaseIdToken(req, res).then((success) => {
			if (!success) throw new Error("Unauthenticated")
			return firestore
				.collection("predlogi")
				.doc(req.query.pid)
				.get()
				.then((response) => {
					return response.data()
				})
				.then((response) => {
					if (response) {
						return firestore
							.collection("predlogi")
							.doc(req.query.pid)
							.collection("komentarji")
							.doc(uuidv4())
							.set({
								komentar: req.body.komentar.trim(),
								timestamp: Date.now(),
								uporabnik: req.user.uid,
							})
							.then(() => {
								data.success = true
								res.status(200).send(JSON.stringify(data))
							})
					} else {
						data.error = "Predlog ne obstaja"
						res.status(404).send(JSON.stringify(data))
					}
				})
				.catch((err) => {
					console.error(err)
					res.status(500).send({ error: "Internal server error" })
				})
		})
	} else {
		res.status(400).send({ error: "Bad request" })
	}
}
