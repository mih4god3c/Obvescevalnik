import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../config/context"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ObjavaList from "../components/ObjavaList"

export default function Predlogi() {
	const router = useRouter()
	const global = useContext(GlobalContext)

	const [isProcessing, setIsProcessing] = useState(true)
	const [objave, setObjave] = useState([])

	useEffect(() => {
		if (router.query.obcina || global.obcina) {
			fetch("/api/predlogi/" + (router.query.obcina || global.obcina), {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: global.token ? "Bearer " + global.token : undefined,
				},
			})
				.then((response) => {
					if (response.status === 200) {
						return response.json()
					} else {
						throw new Error(response.status)
					}
				})
				.then((data) => {
					setIsProcessing(false)
					setObjave(data.data)
				})
				.catch((error) => {
					console.error(error)
				})
		}
	}, [global.obcina, router.query.obcina, global.token])

	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Predlogi | {router.query.obcina || global.obcina}</title>
			</Head>
			<Header />
			<div className="container mx-auto px-8 flex-grow">
				<div className="my-16 md:mx-8 gap-8">
					<h1 className="text-2xl font-bold font-mono">Predlogi MO {router.query.obcina || global.obcina}</h1>
				</div>

				{(!router.query.obcina || router.query.obcina === global.obcina) && (
					<Link href={!!global.token ? "/nov" : "/prijava"}>
						<div className="md:p-12 p-6 mb-16 bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors duration-300 mx-auto w-full flex flex-col items-center rounded-xl cursor-pointer">
							<h1 className="text-2xl font-bold font-mono">+ Dodaj nov predlog</h1>
						</div>
					</Link>
				)}

				{isProcessing && (
					<div className="flex justify-center items-center">
						<svg className="animate-spin h-10 w-10" viewBox="0 0 24 24">
							<circle className="opacity-25 fill-transparent" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
					</div>
				)}

				{!isProcessing && objave.length === 0 && (
					<div className="flex justify-center items-center flex-col">
						<p className="font-mono text-lg">Trenutno ni predlogov za občino {router.query.obcina || global.obcina}.</p>
						<button className="text-white rounded-xl py-2 px-6 mt-6 transition-colors duration-300 bg-blue-600 hover:bg-blue-800" onClick={() => router.push("/")}>
							Nazaj
						</button>
					</div>
				)}
				{objave.map((objava, index) => {
					router.prefetch("/predlog/" + objava.id)
					return (
						<ObjavaList
							key={index}
							id={objava.id}
							index={index}
							naslov={objava.naslov}
							besedilo={objava.podrobnosti}
							vsecki={objava.vsecki}
							nevsecki={objava.nevsecki}
							user={objava.avtor.username}
							timestamp={objava.timestamp}
							isLoggedIn={!!global.token}
							jeVseckan={objava.jeVseckan}
							jeNevseckan={objava.jeNevseckan}
						/>
					)
				})}
			</div>
			<Footer />
		</div>
	)
}
