import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useContext, useEffect, useRef } from "react"
import { GlobalContext } from "../config/context"
import Header from "../components/Header"
import { cacheUserData } from "../scripts/user"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser, signOut } from "firebase/auth"

import { OBCINE } from "../config/constants"

export default function PageLogin() {
	const auth = getAuth()
	const router = useRouter()
	const global = useContext(GlobalContext)

	const signinField = useRef(null)
	const registerField = useRef(null)

	const [isSinginDisabled, setIsSinginDisabled] = useState(true)
	const [isRegisterDisabled, setIsRegisterDisabled] = useState(true)

	const [selectedForm, setSelectedForm] = useState(router.query.a === "p" || router.query.a === "r" ? router.query.a : "p")

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [obcina, setObcina] = useState("")

	const [isProcessing, setIsProcessing] = useState(false)
	const [errorPrijava, setErrorPrijava] = useState("")
	const [errorRegistracija, setErrorRegistracija] = useState("")

	const login = (event) => {
		event.preventDefault()
		setIsProcessing(true)

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				cacheUserData(user, global)
					.then(() => {
						router.push("/predlogi")
					})
					.catch((error) => {
						setErrorPrijava("Napaka: " + error.message)
					})
			})
			.catch((error) => {
				if (error.code == "auth/invalid-email") {
					setErrorPrijava("E-pošta je napačna.")
				} else if (error.code == "auth/user-disabled") {
					setErrorPrijava("Ta račun je onemogočen.")
				} else if (error.code == "auth/user-not-found") {
					setErrorPrijava("Uporabnik s tem e-naslovom ne obstaja.")
				} else if (error.code == "auth/wrong-password") {
					setErrorPrijava("Napačno geslo.")
				} else if (error.code == "auth/too-many-requests") {
					setErrorPrijava("Preveč zahtevkov. Poskusite znova pozneje.")
				} else {
					setErrorPrijava("Napaka: " + error.message + " (" + error.code + ")")
				}
				setIsProcessing(false)
			})
	}

	const register = (event) => {
		event.preventDefault()
		setIsProcessing(true)

		if (obcina == "" || username == "") {
			setErrorRegistracija("Vnesite uporabniško ime, občino, email in geslo.")
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user
					user.getIdToken().then((token) => {
						global.update({
							...global,
							username: username,
							obcina: OBCINE[obcina].name,
							permission: [],
							token,
							uid: user.uid,
						})
						fetch("/api/registracija", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Authorization: "Bearer " + token,
							},
							body: JSON.stringify({
								username: username,
								obcina: OBCINE[obcina],
							}),
						})
							.then((response) => {
								if (response.status === 200) {
									router.push("/predlogi")
								} else {
									throw new Error(response.status)
								}
							})
							.catch((error) => {
								deleteUser(user)
									.then(() => {
										setErrorRegistracija("Napaka: " + error.message)
									})
									.catch((err) => {
										console.error(err)
									})
							})
					})
				})
				.catch((error) => {
					if (error.code == "auth/email-already-in-use") {
						setErrorRegistracija("Račun s tem e-naslovom že obstaja.")
					} else if (error.code == "auth/invalid-email") {
						setErrorRegistracija("E-pošta je napačna.")
					} else if (error.code == "auth/weak-password") {
						setErrorRegistracija("Geslo je prekratko.")
					} else if (error.code == "auth/missing-email") {
						setErrorRegistracija("Vnesite e-poštni naslov.")
					} else {
						setErrorRegistracija("Napaka: " + error.message + " (" + error.code + ")")
					}
					setIsProcessing(false)
				})
		}
	}

	useEffect(() => {
		setIsSinginDisabled(selectedForm !== "p" || email === "" || password === "")
		setIsRegisterDisabled(selectedForm !== "r" || username === "" || obcina === "" || email === "" || password === "")
	}, [selectedForm, email, password, username, obcina])

	useEffect(() => {
		setSelectedForm(router.query.a === "p" || router.query.a === "r" ? router.query.a : "p")
		if (router.query.a === "p") signinField.current.focus()
		if (router.query.a === "r") registerField.current.focus()
	}, [router.query.a])

	useEffect(() => {
		if (!isProcessing && !!global.token) {
			try {
				signOut(auth)
			} catch {
				global.update({
					...global,
					username: undefined,
					obcina: undefined,
					permissions: [],
					token: undefined,
					uid: undefined,
				})
			}
		}
	}, [global.token])

	return (
		<div className="flex flex-col">
			<Head>
				<title>Prijava</title>
			</Head>
			<Header />
			<div className={"flex flex-col items-center justify-center transition-opacity duration-300 " + (selectedForm === "p" ? "opacity-100" : "opacity-40")}>
				<h1 className="text-xl font-medium font-mono mt-16">Prijavi se</h1>

				{errorPrijava && <div className="bg-red-500 text-white rounded-xl px-4 py-2 text-center w-64 my-4">{errorPrijava}</div>}

				<form className="flex flex-col items-center justify-center">
					<input
						id="email_prijavi_se"
						type="text"
						ref={signinField}
						className="bg-gray-100 py-2 px-4 rounded-xl mt-4 w-64 border-gray-200 focus:border-blue-600"
						placeholder="E-pošta"
						onChange={(e) => setEmail(e.target.value)}
						onFocus={() => setSelectedForm("p")}
					/>
					<input
						id="geslo_prijavi_se"
						type="password"
						className="bg-gray-100 py-2 px-4 rounded-xl mt-4 w-64 border-gray-200 focus:border-blue-600"
						placeholder="Geslo"
						onChange={(e) => setPassword(e.target.value)}
						onFocus={() => setSelectedForm("p")}
					/>
					<button
						id="gumb_prijavi_se"
						className={
							"inline-flex items-center justify-center text-white rounded-xl py-2 px-6 mt-8 w-64 transition-colors duration-300 " +
							(!isSinginDisabled ? "bg-blue-600 hover:bg-blue-800" : "bg-gray-300 cursor-not-allowed")
						}
						onClick={login}
						disabled={isSinginDisabled}
					>
						{!isSinginDisabled && isProcessing ? (
							<>
								&nbsp;
								<svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
									<circle className="opacity-25 fill-blue-600" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								&nbsp;
							</>
						) : (
							<>Prijava</>
						)}
					</button>
				</form>
			</div>
			<div className="flex justify-center my-20">
				<hr className="w-1/4 mt-3 border-black" />
				<p className="mx-8">Ali</p>
				<hr className="w-1/4 mt-3 border-black" />
			</div>
			<div className={"flex flex-col items-center justify-center transition-opacity duration-300 " + (selectedForm === "r" ? "opacity-100" : "opacity-40")}>
				<h1 className="text-xl font-medium font-mono">Pridruži se kot prebivalec občine</h1>

				{errorRegistracija && <div className="bg-red-500 text-white rounded-xl px-4 py-2 text-center w-64 my-4">{errorRegistracija}</div>}

				<form className="flex flex-col items-center justify-center">
					<input
						id="uporabnisko_ime_registracija"
						type="text"
						ref={registerField}
						className="bg-gray-100 py-2 px-4 rounded-xl mt-4 w-64 border-gray-200 focus:border-blue-600"
						placeholder="Uporabniško ime"
						onChange={(e) => setUsername(e.target.value)}
						onFocus={() => setSelectedForm("r")}
					/>
					<select
						type="select"
						className={
							"form-select appearance-none block mt-4 px-4 py-2 text-base border-gray-200 bg-gray-100 bg-clip-padding bg-no-repeat rounded-xl transition ease-in-out m-0 focus:border-blue-600 w-64 " +
							(obcina === "" ? "text-gray-600" : "text-black")
						}
						onChange={(e) => setObcina(e.target.value)}
						onFocus={() => setSelectedForm("r")}
						defaultValue=""
					>
						<option value="" disabled={true}>
							Izberi občino
						</option>
						{OBCINE.map((obcina, id) => (
							<option key={id} value={id}>
								{obcina.name}
							</option>
						))}
					</select>
					<input
						id="email_registracija"
						type="text"
						className="bg-gray-100 py-2 px-4 rounded-xl mt-4 w-64 border-gray-200 focus:border-blue-600"
						placeholder="E-pošta"
						onChange={(e) => setEmail(e.target.value)}
						onFocus={() => setSelectedForm("r")}
					/>
					<input
						id="geslo_registracija"
						type="password"
						className="bg-gray-100 py-2 px-4 rounded-xl mt-4 w-64 border-gray-200 focus:border-blue-600"
						placeholder="Geslo"
						onChange={(e) => setPassword(e.target.value)}
						onFocus={() => setSelectedForm("r")}
					/>
					<button
						id="gumb_pridruzi_se"
						className={
							"inline-flex items-center justify-center text-white rounded-xl py-2 px-6 mt-8 w-64 transition-colors duration-300 " +
							(!isRegisterDisabled ? "bg-blue-600 hover:bg-blue-800" : "bg-gray-300 cursor-not-allowed")
						}
						onClick={register}
						disabled={isRegisterDisabled}
					>
						{!isRegisterDisabled && isProcessing ? (
							<>
								&nbsp;
								<svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
									<circle className="opacity-25 fill-blue-600" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								&nbsp;
							</>
						) : (
							<>Pridruži se</>
						)}
					</button>
				</form>
			</div>
		</div>
	)
}
