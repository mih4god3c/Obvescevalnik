import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState, useRef, useContext } from "react"
import Header from "../../components/Header"
import { GlobalContext } from "../../config/context"

export default function NovaNovica() {
	const router = useRouter()
	const global = useContext(GlobalContext)
	const uploadButton = useRef(null)

	const [isProcessing, setIsProcessing] = useState(false)
	const [isPreview, setIsPreview] = useState(false)
	const [hasSubmitted, setHasSubmitted] = useState(false)
	const [errorDodaj, setErrorDodaj] = useState("")

	const [address, setAddress] = useState("")
	const [naslov, setNaslov] = useState("")
	const [podrobnosti, setPodrobnosti] = useState("")

	const [files, setFiles] = useState([])
	const [images, setImages] = useState([])

	const getBase64 = (file) => {
		return new Promise((resolve, reject) => {
			var reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				resolve(reader.result)
			}
			reader.onerror = (error) => {
				reject(error)
			}
		})
	}

	useEffect(() => {
		Promise.all(
			Array.from(files).map((file) => {
				return getBase64(file)
			})
		).then((result) => {
			setImages([...images, ...result].filter((e, i, s) => s.indexOf(e) === i))
			setTimeout(() => {
				if (uploadButton.current) uploadButton.current.value = ""
			}, 10000)
		})
	}, [files])

	const preveri = () => {
		setHasSubmitted(true)
		if (naslov.trim() !== "" || podrobnosti.trim() !== "") {
			setErrorDodaj("")
			setIsPreview(true)
		}
	}

	const dodaj = (event) => {
		event.preventDefault()

		setIsProcessing(true)
		fetch("/api/novica/" + router.query.pid, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + global.token,
			},
			body: JSON.stringify({
				naslov: naslov,
				podrobnosti: podrobnosti,
				slike: images,
			}),
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json()
				} else if (response.status === 403) {
					throw new Error("Niste prijavljeni!")
				} else if (response.status === 413) {
					throw new Error("Slika je prevelika!")
				} else {
					throw new Error(response.status)
				}
			})
			.then((data) => {
				router.push("/predlog/" + router.query.pid + "/" + data.id)
			})
			.catch((error) => {
				setIsProcessing(false)
				console.error(error)
				setErrorDodaj(error.message)
			})
	}

	return (
		<div>
			<Head>
				<title>Dodaj novo novico</title>
			</Head>
			<Header />
			<div className="container mx-auto px-8">
				<form>
					<div className="m-4 gap-8">
						<h1 className="text-2xl font-medium font-mono my-16 text-center">{isPreview ? "Predogled novice" : "Dodaj novico"}</h1>
					</div>
					<input
						type="text"
						className={"bg-gray-100 py-4 px-4 rounded-xl w-full text-xl font-medium focus:border-blue-600 " + (hasSubmitted && naslov.trim() === "" ? "border-red-600" : "border-gray-200")}
						placeholder="Naslov"
						onChange={(e) => setNaslov(e.target.value)}
						disabled={isPreview}
						required={true}
					/>

					<div className="w-full mt-8 lg:space-x-8">
						<textarea
							type="text"
							className={"bg-gray-100 py-2 px-4 rounded-xl w-full break-words h-64 focus:border-blue-600 " + (hasSubmitted && naslov.trim() === "" ? "border-red-600" : "border-gray-200")}
							placeholder="Podrobnosti o novici ..."
							onChange={(e) => setPodrobnosti(e.target.value)}
							disabled={isPreview}
							required={true}
						/>
					</div>

					{(!isPreview || isPreview && !!images.length) ? (
					<div className="lg:my-8 my-8 w-full bg-gray-100 border border-gray-200 rounded-xl p-4">
						{!isPreview && (
							<input ref={uploadButton} type="file" multiple accept="image/jpeg, image/png, image/jpg" onChange={(e) => setFiles(e.target.files)} />
						)}
						{!!images.length && (
							<div className={"grid grid-cols-5 gap-6 " + (!isPreview ? "mt-6" : "")}>
								{images.map((image, index) => {
									return (
										<div key={index}>
											<div className="h-auto bg-red-600 rounded-lg overflow-hidden">
												<img
													src={image}
													className="w-full cursor-pointer hover:animate-pulse rounded-lg overflow-hidden"
													onClick={() => setImages([...images.slice(0, index), ...images.slice(index + 1)])}
												/>
											</div>
										</div>
									)
								})}
							</div>
						)}
					</div>
					) : (
						<div className="my-16"></div>
					)}

					{errorDodaj && <div className="bg-red-500 text-white rounded-xl px-4 py-2 text-center w-full my-4">{errorDodaj}</div>}

					{!isPreview ? (
						<>
							<button
								type="button"
								className=" w-full max-w-xs text-white bg-blue-600 hover:bg-blue-800 rounded-xl px-4 py-2 text-center lg:mb-16 mb-0"
								onClick={preveri}
							>
								Nadaljuj na pregled
							</button>
							<p className="lg:inline-block lg:ml-8 lg:mb-0 mb-16 mt-8 lg:mt-0">Novico boste pred objavo lahko pregledali in popravili</p>
						</>
					) : (
						<>
							<button
								onClick={dodaj}
								type="button"
								className="inline-flex items-center justify-center w-full max-w-xs text-white bg-blue-600 hover:bg-blue-800 rounded-xl px-4 py-2 text-center lg:mb-16 mb-0"
							>
								{isProcessing ? (
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
									<>Objavi</>
								)}
							</button>
							<button
								type="button"
								className="border border-blue-600 hover:border-blue-800 rounded-xl px-4 py-2 text-center lg:ml-4 lg:mb-0 mb-16 mt-8 lg:mt-0"
								onClick={() => setIsPreview(false)}
							>
								Nazaj
							</button>
						</>
					)}
				</form>
			</div>
		</div>
	)
}
