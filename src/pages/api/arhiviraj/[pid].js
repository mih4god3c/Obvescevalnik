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

const deleteCollection = async (collectionRef, batchSize = 300) => {
	const query = collectionRef.orderBy("__name__").limit(batchSize)

	return new Promise((resolve, reject) => {
		deleteQueryBatch(query, resolve).catch(reject)
	})
}

const moveCollection = async (collectionRef, destination, batchSize = 200) => {
	const query = collectionRef.orderBy("__name__").limit(batchSize)

	return new Promise((resolve, reject) => {
		moveQueryBatch(query, destination, resolve).catch(reject)
	})
}

const deleteQueryBatch = async (query, resolve) => {
	const snapshot = await query.get()

	const batchSize = snapshot.size
	if (batchSize === 0) {
		resolve()
		return
	}

	const batch = firestore.batch()
	snapshot.docs.forEach((doc) => {
		batch.delete(doc.ref)
	})
	await batch.commit()

	process.nextTick(() => {
		deleteQueryBatch(query, resolve)
	})
}

const moveQueryBatch = async (query, destination, resolve) => {
	const snapshot = await query.get()

	const batchSize = snapshot.size
	if (batchSize === 0) {
		resolve()
		return
	}

	const batch = firestore.batch()
	snapshot.docs.forEach((doc) => {
		batch.set(destination.doc(doc.id), doc.data())
		batch.delete(doc.ref)
	})
	await batch.commit()

	process.nextTick(() => {
		moveQueryBatch(query, destination, resolve)
	})
}

export default async function handler(req, res) {
	var data = {}
	if (req.query.pid) {
		await validateFirebaseIdToken(req, res)
			.then((success) => {
				if (!success) throw new Error("Unauthenticated")
				return firestore
					.collection("predlogi")
					.doc(req.query.pid)
					.get()
					.then((response) => {
						return response.data()
					})
			})
			.then((response) => {
				return firestore
					.collection("users")
					.doc(req.user.uid)
					.get()
					.then((r) => {
						response.arhiviral = r.data()
						return response
					})
			})
			.then((response) => {
				if (response.avtor !== req.user.uid && !response.arhiviral.permissions.includes("admin")) {
					data.success = false
					res.status(400).send(JSON.stringify(data))
					throw new Error("Unauthenticated")
				}

				response.arhiviral = req.user.uid

				let tasks = [
					firestore.collection("predlogi").doc(req.query.pid).delete(response),
					deleteCollection(firestore.collection("predlogi").doc(req.query.pid).collection("vsecki")),
					deleteCollection(firestore.collection("predlogi").doc(req.query.pid).collection("nevsecki")),
					deleteCollection(firestore.collection("predlogi").doc(req.query.pid).collection("ocene")),
					moveCollection(firestore.collection("predlogi").doc(req.query.pid).collection("komentarji"), firestore.collection("arhiv").doc(req.query.pid).collection("komentarji")),
					moveCollection(firestore.collection("predlogi").doc(req.query.pid).collection("novice"), firestore.collection("arhiv").doc(req.query.pid).collection("novice")),
					firestore.collection("arhiv").doc(req.query.pid).set(response),
				]

				return Promise.all(tasks)
			})
			.then(() => {
				data.success = true
				res.status(200).send(JSON.stringify(data))
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
