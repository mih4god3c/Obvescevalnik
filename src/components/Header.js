import { useRouter } from "next/router"
import Link from "next/link"
import { useContext } from "react"
import { GlobalContext } from "../config/context"
import { getAuth, signOut } from "firebase/auth"

export default function Header() {
	const auth = getAuth()
	const global = useContext(GlobalContext)
	const router = useRouter()

	const odjava = (event) => {
		event.preventDefault()
		signOut(auth)
		router.push("/")
	}

	return (
		<nav className="bg-white border-b-2 border-black px-2 sm:px-4 py-2.5">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<div className="flex justify-between items-center">
					<ul className="hidden md:flex flex-row">
						<li>
							<Link href="/">
								<a className="block py-2 px-4 text-black text-2xl font-bold font-mono">Obveščevalnik</a>
							</Link>
						</li>
						{global.obcina && (
							<li className="lg:block hidden">
								<Link href="/predlogi">
									<a className="block py-2 px-4 text-gray-500 text-2xl font-bold font-mono">MO {global.obcina}</a>
								</Link>
							</li>
						)}
					</ul>
				</div>
				<div className="flex">
					{global.obcina && (
						<ul className="flex flex-row mt-2">
							<li>
								<Link href="/predlogi">
									<a className="block text-black md:text-md text-sm font-bold font-mono md:mx-6 mx-2 hover:text-gray-600">Predlogi</a>
								</Link>
							</li>
							<li>
								<Link href="/arhiv">
									<a className="block text-black md:text-md text-sm font-bold font-mono md:mx-6 mx-2 hover:text-gray-600">Arhiv</a>
								</Link>
							</li>
						</ul>
					)}
					{!global.token ? (
						<>
							<Link href="/prijava">
								<a className="md:text-md text-sm text-white bg-blue-600 hover:bg-blue-800 rounded-xl px-4 py-2 text-center md:mx-6 mx-3">Prijava</a>
							</Link>
							<Link href="/prijava?a=r">
								<a className="md:text-md text-sm text-white bg-blue-600 hover:bg-blue-800 rounded-xl px-4 py-2 text-center">Registracija</a>
							</Link>
						</>
					) : (
						<button type="button" className="md:text-md text-sm text-white bg-blue-600 hover:bg-blue-800 rounded-xl px-4 py-2 text-center md:ml-6 ml-3" onClick={odjava}>
							Odjava
						</button>
					)}
				</div>
			</div>
		</nav>
	)
}
