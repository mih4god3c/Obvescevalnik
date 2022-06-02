import Head from "next/head"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../../../config/context"
import { useRouter } from "next/router"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function Novica() {
	const router = useRouter()
	const global = useContext(GlobalContext)

	const [isProcessing, setIsProcessing] = useState(true)
	const [novica, setNovica] = useState({})
	const [lightboxImage, setLightboxImage] = useState(null)

	const osvezi = () => {
		fetch("/api/predlog/" + router.query.pid + "/" + router.query.nid, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: global.token ? "Bearer " + global.token : undefined,
			},
			body: JSON.stringify({
				arhiv: true
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
				setNovica({ ...data.data, datum: date.getDate() + ". " + (date.getMonth() + 1) + ". " + date.getFullYear() })
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

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Head>
					<title>Novica | {novica.naslov}</title>
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
							<div className="my-16 mb-0 gap-8">
								<div className="mb-4">
									<div className="">
										<h1 id="headline" className="font-bold font-mono break-words text-xl text-black">
											{novica.naslov}
										</h1>
										<div className="flex flex-row">
											<p id="username" className="font-bold font-mono my-4 mr-8 text-md text-black">
												OM {novica.avtor.obcina.name}
											</p>
											<p id="date" className="flex-grow font-bold font-mono my-4 text-md text-gray-500">
												{novica.datum}
											</p>
										</div>
									</div>
								</div>
							</div>

							{novica.slike.length > 0 && (
								<div className="overflow-hidden">
									<div className="mb-16 mt-12 border border-gray-100 rounded-xl">
										<div className="flex flex-wrap">
											{novica.slike.map((slika, index) => (
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
							)}

							<div className="mb-8 gap-8 grid grid-rows-1 grid-cols-3">
								<div className="col-span-3">
									<p id="text" className="font-mono mb-2 font-sm text-gray-600 border break-words border-gray-100 rounded-xl min-h-full pt-4 pb-2 px-4">
										{novica.podrobnosti}
									</p>
								</div>
							</div>
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
