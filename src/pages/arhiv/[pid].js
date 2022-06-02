import Head from "next/head"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../../config/context"
import { useRouter } from "next/router"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Komentar from "../../components/Komentar"
import Map from "../../components/Map"
import { ArrowSquareUp, ArrowSquareDown, X, MapPin, Star } from "phosphor-react"
import { oceni } from "../../scripts/ocene"

export default function Predlog() {
	const router = useRouter()
	const global = useContext(GlobalContext)

	const [isProcessing, setIsProcessing] = useState(true)
	const [predlog, setPredlog] = useState({})
	const [lightboxImage, setLightboxImage] = useState(null)

	const [imaVsecek, setImaVsecek] = useState(false)
	const [imaNevsecek, setImaNevsecek] = useState(false)
	const [stVseckov, setStVseckov] = useState(0)
	const [stNevseckov, setStNevseckov] = useState(0)
	const [jeGlasovanjeOnemogoceno, setJeGlasovanjeOnemogoceno] = useState(false)

	const [skupnaOcena, setSkupnaOcena] = useState(0)
	const [steviloOcen, setSteviloOcen] = useState(0)
	const [starsHovered, setStarsHovered] = useState(0)
	const [stars, setStars] = useState(0)

	const [address, setAddress] = useState("")

	const prikaziNovico = (nid) => {
		router.push("/arhiv/" + predlog.id + "/" + nid)
	}

	const dodeliOceno = () => {
		if (!jeGlasovanjeOnemogoceno) {
			setJeGlasovanjeOnemogoceno(true)
			oceni(router, global.token, predlog.id, !!global.token, starsHovered).then(() => {
				setJeGlasovanjeOnemogoceno(false)
			})

			setSkupnaOcena(skupnaOcena + starsHovered - stars)
			setSteviloOcen(steviloOcen + (stars === 0 ? 1 : 0))
			setStars(starsHovered)
		}
	}

	const osvezi = () => {
		fetch("/api/predlog/" + router.query.pid, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: global.token ? "Bearer " + global.token : undefined,
			},
			body: JSON.stringify({
				arhiv: true,
			}),
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json()
				} else {
					console.error(response.status)
				}
			})
			.then((data) => {
				const date = new Date(data.data.timestamp)
				setIsProcessing(false)
				setPredlog({ ...data.data, datum: date.getDate() + ". " + (date.getMonth() + 1) + ". " + date.getFullYear() })
				setImaNevsecek(data.data.jeNevseckan)
				setImaVsecek(data.data.jeVseckan)
				setStNevseckov(data.data.nevsecki)
				setStVseckov(data.data.vsecki)
				if (Object.keys(data.data.lokacija).length > 0) {
					locationToAddress(data.data.lokacija)
				}
				setSkupnaOcena(Math.round(data.data.ocena / data.data.steviloOcen))
				setSteviloOcen(data.data.steviloOcen)
				setStarsHovered(data.data.trenutnaOcena)
				setStars(data.data.trenutnaOcena)
			})
			.catch((error) => {
				console.error(error)
			})
	}

	useEffect(() => {
		if (router.query.pid) {
			osvezi()
		}
	}, [router.query.pid, global.token])

	const locationToAddress = ({ lat, lng }) => {
		fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
			.then((response) => {
				if (response.status == 200) {
					return response.json()
				} else {
					console.error(response.status)
				}
			})
			.then((data) => {
				setAddress(data.results[0].formatted_address)
			})
	}

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Head>
					<title>Predlog | {predlog.naslov}</title>
				</Head>
				<Header />
				{isProcessing ? (
					<div className="flex-grow">
						<div className="flex justify-center items-center mt-16">
							<svg className="animate-spin h-10 w-10" viewBox="0 0 24 24">
								<circle className="opacity-25 fill-transparent" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
					</div>
				) : (
					<div className="flex-grow">
						<div className="container mx-auto px-8">
							<div className="my-16 mb-0 gap-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
								<div>
									<div className="inline-flex">
										<button id="gumb_vsecek" disabled={true} className={imaNevsecek ? "opacity-20" : "opacity-100"}>
											<ArrowSquareUp size={64} color="rgb(0, 0, 0)" />
										</button>
										<p id="stVseckov" className="text-2xl font-bold font-mono ml-4 mt-4">
											{stVseckov}
										</p>
									</div>
									<div></div>

									<div className="inline-flex">
										<button id="gumb_nevsecek" disabled={true} className={imaVsecek ? "opacity-20" : "opacity-100"}>
											<ArrowSquareDown size={64} color="rgb(0, 0, 0)" />
										</button>
										<p id="stNevseckov" className="text-2xl font-bold font-mono ml-4 mt-4">
											{stNevseckov}
										</p>
									</div>
								</div>

								<div className="col-span-5 md:mb-16 mb-8">
									<div className="">
										<h1 id="headline" className="font-bold font-mono break-words text-xl text-black">
											{predlog.naslov}
										</h1>
										<div className="flex flex-row">
											<p id="username" className="font-bold font-mono my-4 mr-8 text-md text-black">
												{predlog.avtor.username}
											</p>
											<p id="date" className="flex-grow font-bold font-mono my-4 text-md text-gray-500">
												{predlog.datum}
											</p>
										</div>
										{address && (
											<div className="flex flex-row">
												<MapPin size={32} color={"rgb(0, 0, 0, 0.7)"} />
												<div className="font-bold font-mono text-md mx-2 my-1 text-gray-700">{address}</div>
											</div>
										)}
									</div>

									<div className="container row-span-1">
										<ul className="flex flex-wrap items-center px-4 mt-3 ml-0 pl-1" onMouseLeave={() => setStarsHovered(stars)}>
											<li
												id="star1"
												className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"}
												onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 1)}
												onClick={dodeliOceno}
											>
												<Star size={32} color={starsHovered >= 1 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
											</li>
											<li
												id="star2"
												className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"}
												onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 2)}
												onClick={dodeliOceno}
											>
												<Star size={32} color={starsHovered >= 2 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
											</li>
											<li
												id="star3"
												className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"}
												onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 3)}
												onClick={dodeliOceno}
											>
												<Star size={32} color={starsHovered >= 3 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
											</li>
											<li
												id="star4"
												className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"}
												onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 4)}
												onClick={dodeliOceno}
											>
												<Star size={32} color={starsHovered >= 4 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
											</li>
											<li
												id="star5"
												className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"}
												onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 5)}
												onClick={dodeliOceno}
											>
												<Star size={32} color={starsHovered >= 5 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
											</li>
											<li className="-mt-1 pl-4 text-lg" onMouseEnter={() => setStarsHovered(stars)}>
												{(skupnaOcena / steviloOcen).toFixed(1) + " (" + steviloOcen + ")"}
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="mb-8 gap-8 grid grid-rows-1 grid-cols-3">
								{Object.keys(predlog.lokacija).length > 0 && (
									<div className="lg:col-span-1 col-span-3">
										<div className="w-full aspect-square rounded-xl overflow-hidden">
											<Map location={predlog.lokacija} mapCenter={predlog.lokacija} isEnabled={false} />
										</div>
									</div>
								)}

								<div className={Object.keys(predlog.lokacija).length ? "col-span-3 lg:col-span-2" : "col-span-3"}>
									<p id="text" className="font-mono mb-2 font-sm text-gray-600 border break-words border-gray-100 rounded-xl min-h-full pt-4 pb-2 px-4">
										{predlog.podrobnosti}
									</p>
								</div>
							</div>

							{predlog.slike.length > 0 ? (
								<div className="overflow-hidden">
									<div className="mb-16 mt-8 border border-gray-100 rounded-xl">
										<div className="flex flex-wrap">
											{predlog.slike.map((slika, index) => (
												<div className="lg:w-1/4 sm:w-1/2 w-full" key={index}>
													<div className="w-full p-4 -mb-1.5">
														<Image
															layout="intrinsic"
															width="500"
															height="500"
															className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
															src={slika}
															onClick={() => setLightboxImage(slika)}
														/>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							) : (
								<div className="pb-16"></div>
							)}
						</div>
						{predlog.novice.length > 0 && (
							<div className={"w-full border-black " + (predlog.komentarji.length > 0 ? "mb-16 border-y-2" : "border-t-2")}>
								<div className="container mx-auto px-8 py-16">
									<h1 className="text-black mb-16 text-2xl font-bold font-mono">Novice in rešitve</h1>
									{predlog.novice.map((novica, index) => (
										<div className="grid grid-cols-4 gap-8 group cursor-pointer" key={index} onClick={() => prikaziNovico(novica.id)}>
											{novica.slike.length > 0 && (
												<div className="lg:col-span-1 col-span-4">
													<div className="w-full">
														<Image
															layout="intrinsic"
															width="500"
															height="500"
															className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
															src={novica.slike[0]}
															onClick={() => setLightboxImage(slika)}
														/>
													</div>
												</div>
											)}
											<div className={"col-span-4 mt-6 lg:mt-0 " + (novica.slike.length > 0 ? "lg:col-span-3" : "")}>
												<div className="flex items-start mb-5">
													<div className="pr-4">
														<h1 id="headline" className="font-bold font-mono break-words text-xl text-black group-hover:underline">
															{novica.naslov}
														</h1>
														<div className="flex flex-row">
															<p id="username" className="block font-bold font-mono mb-2 mt-2 mr-8 text-md text-black">
																{novica.avtor.obcina.name}
															</p>
															<p id="date" className="block font-bold font-mono mb-2 mt-2 text-md text-gray-500">
																{(() => {
																	const date = new Date(novica.timestamp)
																	return date.getDate() + ". " + (date.getMonth() + 1) + ". " + date.getFullYear()
																})()}
															</p>
														</div>
													</div>
												</div>
												<p id="text" className="font-mono mb-2 font-sm text-gray-500">
													{novica.podrobnosti}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
						{predlog.komentarji.length > 0 && (
							<div className="container mx-auto px-8">
								{predlog.komentarji.map((komentar, index) => (
									<Komentar
										key={index}
										user={komentar.uporabnik}
										besedilo={komentar.komentar}
										date={(() => {
											const date = new Date(komentar.timestamp)
											return date.getDate() + ". " + (date.getMonth() + 1) + ". " + date.getFullYear()
										})()}
									/>
								))}
							</div>
						)}
					</div>
				)}
				<Footer />
			</div>
			{lightboxImage && (
				<div className="fixed inset-0 bg-black bg-opacity-90 cursor-pointer" onClick={() => setLightboxImage(null)}>
					<div className="flex flex-col justify-center items-center w-2/3 h-screen mx-auto">
						<div className="">
							<Image layout="fill" objectFit="contain" src={lightboxImage} />
						</div>
					</div>
					<div className="absolute top-0 right-0 pt-8 pr-8">
						<div class="bg-white bg-opacity-50 w-auto rounded-full p-1">
							<X size={32} />
						</div>
					</div>
				</div>
			)}
		</>
	)
}
