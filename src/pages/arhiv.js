import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../config/context"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ObjavaList from "../components/ObjavaList"


export default function Arhiv() {
	const router = useRouter()
	const global = useContext(GlobalContext)

	const [isProcessing, setIsProcessing] = useState(false)
	const [objave, setObjave] = useState([])

	useEffect(() => {
		setIsProcessing(true)
		if (global.obcina) {
			fetch("/api/arhiv/" + global.obcina, {
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
	}, [global.obcina])

	return (
		<div className="flex flex-col min-h-screen">
			<Head>
        		<title>Arhiv | {router.query.obcina || global.obcina}</title>
			</Head>
			<Header />
			<div className="container mx-auto px-8 flex-grow">
				<div className="m-16 gap-8 grid grid-cols-5">
					<h1 className="text-black text-2xl font-bold font-mono md:border-0">Arhiv</h1>
				</div>

				{isProcessing && (
					<div className="flex justify-center items-center">
						<svg className="animate-spin h-10 w-10" viewBox="0 0 24 24">
							<circle className="opacity-25 fill-transparent" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
					</div>
				)}

				{objave.map((objava, index) => {
					router.prefetch("/arhiv/" + objava.id)
					return (
						<ObjavaList
							key={index}
							index={index}
							id={objava.id}
							naslov={objava.naslov}
							besedilo={objava.podrobnosti}
							vsecki={objava.vsecki}
							nevsecki={objava.nevsecki}
							user={objava.avtor.username}
							timestamp={objava.timestamp}
							isLoggedIn={!!global.token}
							isArchived={true}
							ocena={objava.ocena}
							stOcen={objava.steviloOcen}
							trenutnaOcena={objava.trenutnaOcena}
						/>
					)
				})}
			</div>
			<Footer />
		</div>
	)
}
