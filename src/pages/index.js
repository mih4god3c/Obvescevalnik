import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useContext, useEffect } from "react"
import { GlobalContext } from "../config/context"

import Header from "../components/Header"

import { OBCINE } from "../config/constants"
import Footer from "../components/Footer"

export default function PageHome() {
	const router = useRouter()
	const global = useContext(GlobalContext)
	const [obcina, setObcina] = useState(
		OBCINE.map((e) => e.name)
			.indexOf(global.obcina)
			.toString()
	)

	const updateObcina = (event) => {
		event.preventDefault()
		router.push("/predlogi?obcina=" + OBCINE[obcina].name)
	}

	useEffect(() => {
		if (global.obcina && obcina === "-1") {
			setObcina(
				OBCINE.map((e) => e.name)
					.indexOf(global.obcina)
					.toString()
			)
		}
	}, [global.obcina])

	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Obveščevalnik</title>
			</Head>
			<Header />
			<div className="flex-grow">
				<div className="min-h-screen-1/2 w-full bg-blue-100 bg-hero-pattern bg-cover bg-no-repeat bg-bottom">
					<div className="min-h-screen-1/2 w-full backdrop-blur-3xl px-16 flex flex-col items-center justify-center">
						<div className="container mx-auto">
							<div className="mx-auto lg:w-2/3 2xl:w-3/5 my-16">
								<h1 className="text-2xl font-medium font-mono text-center">
									Obveščevalnik, aplikacija za boljšo
									<br />
									povezavo občin z njenimi občani.
								</h1>
								{/* <p className="text-base font-medium font-mono mt-16 text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non magna turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
									turpis egestas. Praesent sed commodo neque. Aenean ullamcorper vestibulum ex, at blandit massa facilisis in. Curabitur euismod nulla sed tellus aliquet molestie.
									Cras nec eleifend turpis. Praesent vel ipsum vel nisl faucibus gravida eu et nibh. Nullam eleifend molestie tortor sed volutpat.
								</p> */}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16">
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-2xl font-medium font-mono mt-6">Prebrskaj predloge</h1>

						<select
							id="obcina"
							className={
								"form-select appearance-none block mt-6 px-4 py-2 text-base bg-gray-100 bg-clip-padding bg-no-repeat border-gray-200 rounded-xl transition ease-in-out m-0 focus:border-blue-600 w-64 " +
								(obcina === "-1" ? "text-gray-600" : "text-black")
							}
							onChange={(e) => setObcina(e.target.value)}
							value={
								obcina
									? obcina
									: global.obcina
									? OBCINE.map((e) => e.name)
											.indexOf(global.obcina)
											.toString()
									: "-1"
							}
						>
							{!global.obcina && (
								<option value="-1" disabled>
									Izberi občino
								</option>
							)}
							{OBCINE.map((obcina, id) => (
								<option key={id} value={id}>
									{obcina.name}
								</option>
							))}
						</select>
						<button
							className={
								"text-white rounded-xl py-2 px-6 mt-2 w-64 transition-colors duration-300 " + (obcina !== "-1" ? "bg-blue-600 hover:bg-blue-800" : "bg-gray-300 cursor-not-allowed")
							}
							onClick={updateObcina}
							disabled={obcina === -1}
						>
							Prebrskaj
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
