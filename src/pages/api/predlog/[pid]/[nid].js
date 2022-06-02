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

export default async function handler(req, res) {
	var data = {}
	if (req.query.pid) {
		await firestore
			.collection(req.body.arhiv ? "arhiv" : "predlogi")
			.doc(req.query.pid)
			.collection("novice")
			.doc(req.query.nid)
			.get()
			.then((response) => {
				return response.data()
			})
			.then((response) => {
				return firestore
					.collection("users")
					.doc(response.avtor)
					.get()
					.then((r) => {
						response.uid = response.avtor
						response.avtor = r.data()
						return response
					})
			})
			.then((response) => {
				data.data = response
				res.status(200).send(JSON.stringify(data))
			})
			.catch((err) => {
				console.error(err)
				res.status(500).send({ error: "Internal server error" })
			})
	} else {
		res.status(400).send({ error: "Bad request" })
	}
}
