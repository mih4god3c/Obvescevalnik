import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState, useRef, useContext } from "react"
import Header from "../components/Header"
import { GlobalContext } from "../config/context"
import Map from "../components/Map"

export default function NovPredlog() {
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

	const [location, setLocation] = useState({
		lat: undefined,
		lng: undefined,
	})
	const [mapCenter, setMapCenter] = useState({ lat: location.lat || 46.119944, lng: location.lng || 14.815333 })

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
		fetch("/api/nov", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + global.token,
			},
			body: JSON.stringify({
				naslov: naslov,
				lokacija: location,
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
				router.push("/predlog/" + data.id)
			})
			.catch((error) => {
				setIsProcessing(false)
				console.error(error)
				setErrorDodaj(error.message)
			})
	}

	const addressToLocation = (addr) => {
		fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(addr) + "&key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
			.then((response) => {
				if (response.status == 200) {
					return response.json()
				} else {
					console.error(response)
				}
			})
			.then((data) => {
				setAddress(data.results[0].formatted_address)
				setLocation({ lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng })
				setMapCenter({ lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng })
			})
	}

	return (
		<div>
			<Head>
				<title>Dodaj nov predlog</title>
			</Head>
			<Header />
			<div className="container mx-auto px-8">
				<form>
					<div className="m-4 gap-8">
						<h1 className="text-2xl font-medium font-mono my-16 text-center">{isPreview ? "Predogled objave" : "Dodaj nov predlog"}</h1>
					</div>
					<input
						id="naslov"
						type="text"
						className={"bg-gray-100 py-4 px-4 rounded-xl w-full text-xl font-medium focus:border-blue-600 " + (hasSubmitted && naslov.trim() === "" ? "border-red-600" : "border-gray-200")}
						placeholder="Naslov"
						onChange={(e) => setNaslov(e.target.value)}
						disabled={isPreview}
						required={true}
					/>

					<div className="grid lg:grid-cols-3 grid-cols-1 w-full lg:mt-16 mt-8 lg:space-x-8">
						<div className="col-span-1">
							<div className="inline-flex w-full mb-2 space-x-2">
								<input
									id="address"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									onKeyUp={(e) => {
										if (e.key === "Enter") {
											addressToLocation(address)
										}
									}}
									type="text"
									placeholder="Naslov, mesto, znamenitost..."
									className="flex-grow bg-gray-100 py-2 px-4 rounded-xl border-gray-200 focus:border-blue-600"
								/>
								{!isPreview && (
									<button
										onClick={() => addressToLocation(address)}
										type="button"
										className={"text-white hover:bg-gray-800 rounded-xl px-4 py-2 text-center " + (address === "" ? "bg-gray-300" : "bg-gray-500")}
										disabled={isPreview || address === ""}
									>
										Išči
									</button>
								)}
							</div>
							<div className="w-full aspect-square rounded-xl overflow-hidden">
								<Map location={location} mapCenter={mapCenter} setAddress={setAddress} setLocation={setLocation} isEnabled={!isPreview} />
							</div>
						</div>

						<div className="lg:col-span-2 col-span-1 lg:mt-0 mt-8">
							<textarea
								id="podrobnosti"
								type="text"
								className={
									"bg-gray-100 py-2 px-4 rounded-xl w-full break-words lg:h-full h-64 focus:border-blue-600 " +
									(hasSubmitted && naslov.trim() === "" ? "border-red-600" : "border-gray-200")
								}
								placeholder="Podrobnosti o predlogu ..."
								onChange={(e) => setPodrobnosti(e.target.value)}
								disabled={isPreview}
								required={true}
							/>
						</div>
					</div>

					{!isPreview || (isPreview && !!images.length) ? (
						<div className={"lg:my-16 my-8 w-full bg-gray-100 border border-gray-200 rounded-xl p-4"}>
							{!isPreview && <input ref={uploadButton} type="file" multiple accept="image/jpeg, image/png, image/jpg" onChange={(e) => setFiles(e.target.files)} />}
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
							<button type="button" className=" w-full max-w-xs text-white bg-blue-600 hover:bg-blue-800 rounded-xl px-4 py-2 text-center lg:mb-16 mb-0" onClick={preveri}>
								Nadaljuj na pregled
							</button>
							<p className="lg:inline-block lg:ml-8 lg:mb-0 mb-16 mt-8 lg:mt-0">Predlog boste pred objavo lahko pregledali in popravili</p>
						</>
					) : (
						<>
							<button
								onClick={dodaj}
								type="button"
								className="inline-flex items-center justify-center w-full max-w-xs text-white bg-blue-600 hover:bg-blue-800 rounded-xl px-4 py-2 text-center lg:mb-16 mb-0 mr-4"
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
								className="border border-blue-600 hover:border-blue-800 rounded-xl px-4 py-2 text-center lg:mb-0 mb-16 mt-8 lg:mt-0"
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
