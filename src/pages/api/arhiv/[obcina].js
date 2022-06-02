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
	const isLoggedIn = await validateFirebaseIdToken(req, res)
	await firestore
		.collection("arhiv")
		.orderBy("timestamp", "desc")
		.limit(1000)
		.get()
		.then((response) => {
			return response.docs.map((doc) => doc.data())
		})
		.then((response) => {
			return Promise.all(
				response.map((predlog) => {
					return firestore
						.collection("users")
						.doc(predlog.avtor)
						.get()
						.then((r) => {
							predlog.avtor = r.data()
							return predlog
						})
						.then((response) => {
							if (isLoggedIn) {
								return firestore
									.collection("arhiv")
									.doc(predlog.id)
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
				})
			)
		})
		.then((response) => {
			data.success = true
			data.data = response
				.filter((predlog) => predlog.avtor.obcina.name === req.query.obcina)
				.sort((a, b) => b.vsecki - b.nevsecki - (a.vsecki - a.nevsecki))
			res.status(200).send(JSON.stringify(data))
		})
		.catch((err) => {
			console.error(err)
			res.status(500).send({ error: "Internal server error" })
		})
}
