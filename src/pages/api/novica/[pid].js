import Firestore from "@google-cloud/firestore"
import { Storage } from "@google-cloud/storage"
import firebase from "firebase-admin"
import { v4 as uuidv4 } from "uuid"
import mime from "mime"

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

const uploadImage = (file) => {
	return new Promise((resolve, reject) => {
		const { extension, data } = file

		const blob = bucket.file("uploads/" + uuidv4() + "." + extension)
		const blobStream = blob.createWriteStream({
			resumable: false,
		})
		blobStream
			.on("finish", () => {
				const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
				resolve(publicUrl)
			})
			.on("error", () => {
				reject(`Unable to upload image, something went wrong`)
			})
			.end(data)
	})
}

export default async function handler(req, res) {
	const newUuid = uuidv4()
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
				if (!response.brisal.permissions.includes("admin")) {
					data.success = false
					res.status(400).send(JSON.stringify(data))
					throw new Error("Unauthenticated")
				}
				if (req.body.naslov.trim() === "" || req.body.podrobnosti.trim() === "") {
					return
				}

				return Promise.all(
					req.body.slike
						.map((slika) => {
							const matches = slika.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
							if (matches.length !== 3) {
								return new Error("Invalid input String")
							}
	
							return { extension: mime.getExtension(matches[1]), data: Buffer.from(matches[2], "base64") }
						})
						.map(uploadImage)
				).then((urls) => urls.filter((url) => url !== undefined))
			})
			.then((urls) => {
				const naslov = req.body.naslov.split(/\s+/).join(" ").trim()
				const opis = req.body.podrobnosti.split(/\s+/).join(" ").trim()
				if (naslov === "" || opis === "") {
					return
				}
	
				return firestore
					.collection("predlogi")
					.doc(req.query.pid)
					.collection("novice")
					.doc(newUuid)
					.set({
						id: newUuid,
						naslov: naslov,
						podrobnosti: opis,
						slike: urls,
						timestamp: Date.now(),
						avtor: req.user.uid,
					})
			})
			.then(() => {
				data.success = true
				data.id = newUuid
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
