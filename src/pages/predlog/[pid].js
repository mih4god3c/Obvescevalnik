import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useContext, Fragment } from "react"
import { GlobalContext } from "../../config/context"
import { useRouter } from "next/router"
import { Menu, Transition } from "@headlessui/react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Komentar from "../../components/Komentar"
import Map from "../../components/Map"
import { ArrowSquareUp, ArrowSquareDown, DotsThree, X, MapPin } from "phosphor-react"
import { vseckaj, nevseckaj } from "../../scripts/ocene"

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

	const [address, setAddress] = useState("")

	const [komentar, setKomentar] = useState("")
	const [isPublishingComment, setIsPublishingComment] = useState(false)

	const arhiviraj = () => {
		setIsProcessing(true)
		fetch("/api/arhiviraj/" + router.query.pid, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + global.token,
			},
		}).then((response) => {
			if (response.status === 200) {
				router.push("/arhiv")
			} else {
				console.error(response.status)
			}
		})
	}

	const izbrisi = () => {
		let potrdi = confirm("Ali ste prepričani, da želite izbrisati predlog?")
		if (potrdi) {
			setIsProcessing(true)
			fetch("/api/brisi/" + router.query.pid, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + global.token,
				},
			}).then((response) => {
				if (response.status === 200) {
					router.push("/predlogi")
				} else {
					console.error(response.status)
				}
			})
		}
	}

	const komentiraj = () => {
		setIsPublishingComment(true)
		fetch("/api/komentiraj/" + router.query.pid, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + global.token,
			},
			body: JSON.stringify({
				komentar: komentar,
			}),
		}).then((response) => {
			if (response.status === 200) {
				osvezi()
			} else {
				console.error(response.status)
			}
		})
	}

	const prikaziNovico = (nid) => {
		router.push("/predlog/" + predlog.id + "/" + nid)
	}

	const osvezi = () => {
		fetch("/api/predlog/" + router.query.pid, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: global.token ? "Bearer " + global.token : undefined,
			},
			body: JSON.stringify({
				arhiv: false,
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
				setIsPublishingComment(false)
				setKomentar("")
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
							<div className="my-16 mb-0 md:gap-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
								<div className="mb-4">
									<div className="inline-flex">
										<button
											id="gumb_vsecek"
											disabled={jeGlasovanjeOnemogoceno}
											onClick={() => {
												setJeGlasovanjeOnemogoceno(true)
												vseckaj(router, global.token, predlog.id, !!global.token).then(() => {
													setJeGlasovanjeOnemogoceno(false)
												})
												if (imaVsecek) {
													setImaVsecek(false)
													setStVseckov(stVseckov - 1)
												} else {
													if (imaNevsecek) {
														setImaNevsecek(false)
														setStNevseckov(stNevseckov - 1)
													}
													setImaVsecek(true)
													setStVseckov(stVseckov + 1)
												}
											}}
											className={"bg-green-100 rounded-lg " + (imaNevsecek ? "opacity-20" : "opacity-100")}
										>
											<ArrowSquareUp size={64} color="rgb(0, 210, 0)" />
										</button>
										<p id="stVseckov" className="text-2xl font-bold font-mono ml-4 mt-4">
											{stVseckov}
										</p>
									</div>
									<div></div>

									<div className="inline-flex">
										<button
											id="gumb_nevsecek"
											disabled={jeGlasovanjeOnemogoceno}
											onClick={() => {
												setJeGlasovanjeOnemogoceno(true)
												nevseckaj(router, global.token, predlog.id, !!global.token).then(() => {
													setJeGlasovanjeOnemogoceno(false)
												})
												if (imaNevsecek) {
													setImaNevsecek(false)
													setStNevseckov(stNevseckov - 1)
												} else {
													if (imaVsecek) {
														setImaVsecek(false)
														setStVseckov(stVseckov - 1)
													}
													setImaNevsecek(true)
													setStNevseckov(stNevseckov + 1)
												}
											}}
											className={"bg-red-50 rounded-lg " + (imaVsecek ? "opacity-20" : "opacity-100")}
										>
											<ArrowSquareDown size={64} color="rgb(220, 0, 0)" />
										</button>
										<p id="stNevseckov" className="text-2xl font-bold font-mono ml-4 mt-4">
											{stNevseckov}
										</p>
									</div>
								</div>

								<div className="col-span-5 mb-4">
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
											{((global.permissions && global.permissions.includes("admin")) || global.uid == predlog.uid) && (
												<Menu as="div" className="relative inline-block">
													<div id="pikice">
														<Menu.Button className="inline-flex justify-center">
															<DotsThree size={48} />
														</Menu.Button>
													</div>

													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
															<div className="py-1">
																{global.permissions.includes("admin") && (
																	<Menu.Item>
																		{({ active }) => (
																			<p
																				onClick={arhiviraj}
																				className={"block cursor-pointer px-4 py-2 text-sm " + (active ? "bg-gray-100 text-gray-900" : "text-gray-700")}
																			>
																				Arhiviraj predlog
																			</p>
																		)}
																	</Menu.Item>
																)}
																<Menu.Item>
																	{({ active }) => (
																		<p
																			onClick={izbrisi}
																			className={
																				"block cursor-pointer px-4 py-2 text-sm text-red-600 " + (active ? "bg-gray-100 text-gray-900" : "text-gray-700")
																			}
																		>
																			Izbriši predlog
																		</p>
																	)}
																</Menu.Item>
															</div>
														</Menu.Items>
													</Transition>
												</Menu>
											)}
										</div>
										{address && (
											<div className="flex flex-row">
												<MapPin size={32} color={"rgb(0, 0, 0, 0.7)"} />
												<div className="font-bold font-mono text-md mx-2 my-1 text-gray-700">{address}</div>
											</div>
										)}
									</div>
								</div>
							</div>

							<div className="mb-4 gap-8 grid grid-rows-1 grid-cols-3">
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
								<div className="mb-16 mt-4 border border-gray-100 rounded-xl">
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
							) : (
								<div className="pb-16"></div>
							)}
						</div>
						{(predlog.novice.length > 0 || global.permissions.includes("admin")) && (
							<div className="mb-16 w-full border-y-2 border-black">
								<div className="container mx-auto px-8 py-16">
									<h1 className="text-black mb-16 text-2xl font-bold font-mono">Novice in rešitve</h1>
									{global.permissions.includes("admin") && (
										<Link href={"/nov/" + predlog.id}>
											<div className="md:p-12 p-6 mb-16 bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors duration-300 mx-auto w-full flex flex-col items-center rounded-xl cursor-pointer">
												<h1 className="text-2xl font-bold font-mono">+ Dodaj novico</h1>
											</div>
										</Link>
									)}

									{predlog.novice.map((novica, index) => (
										<div className="grid grid-cols-4 gap-8 group cursor-pointer" key={index} onClick={() => prikaziNovico(novica.id)}>
											{novica.slike.length > 0 && (
												<div className="lg:col-span-1 col-span-4">
													<div className="w-full">
														<Image
															layout="intrinsic"
															width="500"
															height="250"
															className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
															src={novica.slike[0]}
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
													{novica.podrobnosti.split(" ").length > 100 ? novica.podrobnosti.split(" ").slice(0, 100).join(" ") + " ..." : novica.podrobnosti}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
						<div className="container mx-auto px-8">
							<div className="mb-16">
								<textarea
									id="komentiraj"
									onChange={(e) => setKomentar(e.target.value)}
									type="text"
									className="border-gray-200 bg-gray-100 py-2 px-4 rounded-xl w-full h-32"
									placeholder="Komentiraj"
									value={komentar}
								/>
								<button
									onClick={komentiraj}
									type="button"
									className={
										"inline-flex items-center justify-center mt-2 w-full max-w-xs text-white rounded-xl px-4 py-2 text-center " +
										(komentar.trim() !== "" ? "bg-blue-600 hover:bg-blue-800" : "bg-gray-300 cursor-not-allowed")
									}
								>
									{isPublishingComment ? (
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
										<>Dodaj komentar</>
									)}
								</button>
							</div>

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
