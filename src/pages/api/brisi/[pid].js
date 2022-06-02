import Firestore from "@google-cloud/firestore"
import { Storage } from "@google-cloud/storage"
import firebase from "firebase-admin"

if (process.env.NODE_ENV !== "production") {
	process.env.GOOGLE_APPLICATION_CREDENTIALS = "./config/service_account.json"
}

const firestore = new Firestore({
	projectId: "tpo-skupina-24",
})
const storage = new Storage({
	projectId: "tpo-skupina-24",
})
const bucket = storage.bucket("gs://tpo-skupina-24.appspot.com")
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
						response.brisal = r.data()
						return response
					})
			})
			.then((response) => {
				if (response.avtor !== req.user.uid && !response.brisal.permissions.includes("admin")) {
					data.success = false
					res.status(400).send(JSON.stringify(data))
					throw new Error("Unauthenticated")
				}

				return firestore
					.collection("predlogi")
					.doc(req.query.pid)
					.delete()
					.then(() => {
						return response
					})
			})
			.then((response) => {
				return Promise.all(
					response.slike.map((slika) => {
						return bucket.file(slika.split("tpo-skupina-24.appspot.com/")[1]).delete()
					})
				)
			})
			.then(() => {
				return Promise.all([
					deleteCollection(firestore.collection("predlogi").doc(req.query.pid).collection("vsecki")),
					deleteCollection(firestore.collection("predlogi").doc(req.query.pid).collection("nevsecki")),
					deleteCollection(firestore.collection("predlogi").doc(req.query.pid).collection("komentarji")),
					deleteCollection(firestore.collection("predlogi").doc(req.query.pid).collection("novice")),
				])
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
