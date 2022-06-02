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
	const collection = req.body.arhiv ? "arhiv" : "predlogi"
	var data = {}
	if (req.query.pid) {
		const isLoggedIn = await validateFirebaseIdToken(req, res)
		await firestore
			.collection(collection)
			.doc(req.query.pid)
			.get()
			.then((response) => {
				return response.data()
			})
			.then((response) => {
				return firestore
					.collection(collection)
					.doc(req.query.pid)
					.collection("komentarji")
					.limit(20)
					.orderBy("timestamp", "desc")
					.get()
					.then((r) => {
						return r.docs.map((doc) => doc.data())
					})
					.then((r) => {
						let tasks = []
						r.forEach((doc) => {
							tasks.push(
								firestore
									.collection("users")
									.doc(doc.uporabnik)
									.get()
									.then((u) => {
										doc.uporabnik = u.data().username
										return doc
									})
							)
						})
						return Promise.all(tasks)
					})
					.then((r) => {
						response.komentarji = r
						return response
					})
			})
			.then((response) => {
				return firestore
					.collection(collection)
					.doc(req.query.pid)
					.collection("novice")
					.limit(10)
					.orderBy("timestamp", "desc")
					.get()
					.then((r) => {
						let tasks = []
						r.forEach((doc) => {
							tasks.push(doc.data())
						})
						return Promise.all(tasks)
					})
					.then((r) => {
						let tasks = []
						r.forEach((doc) => {
							tasks.push(
								firestore
									.collection("users")
									.doc(doc.avtor)
									.get()
									.then((u) => {
										doc.uid = doc.avtor
										doc.avtor = u.data()
										return doc
									})
							)
						})
						return Promise.all(tasks)
					})
					.then((r) => {
						response.novice = r
						return response
					})
			})
			.then((response) => {
				if (isLoggedIn && collection === "predlogi") {
					return firestore
						.collection(collection)
						.doc(req.query.pid)
						.collection("vsecki")
						.doc(req.user.uid)
						.get()
						.then((r) => {
							if (r.data()) {
								response.jeVseckan = true
							}
							return response
						})
				} else {
					return response
				}
			})
			.then((response) => {
				if (isLoggedIn && collection === "predlogi") {
					return firestore
						.collection(collection)
						.doc(req.query.pid)
						.collection("nevsecki")
						.doc(req.user.uid)
						.get()
						.then((r) => {
							if (r.data()) {
								response.jeNevseckan = true
							}
							return response
						})
				} else {
					return response
				}
			})
			.then((response) => {
				if (isLoggedIn && collection === "arhiv") {
					return firestore
						.collection(collection)
						.doc(req.query.pid)
						.collection("ocene")
						.doc(req.user.uid)
						.get()
						.then((r) => {
							const data = r.data()
							response.trenutnaOcena = data ? data.ocena : 0
							return response
						})
				} else {
					return response
				}
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
