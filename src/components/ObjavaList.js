import { useRouter } from "next/router"
import { ArrowSquareUp, ArrowSquareDown, Star } from "phosphor-react"
import { useContext, useState } from "react"
import { GlobalContext } from "../config/context"
import { vseckaj, nevseckaj, oceni } from "../scripts/ocene"

export default function PredlogList({
	id,
	index,
	naslov,
	user,
	timestamp,
	besedilo,
	vsecki,
	nevsecki,
	jeVseckan = false,
	jeNevseckan = false,
	isArchived = false,
	ocena = 0,
	stOcen = 0,
	trenutnaOcena = 0,
}) {
	const global = useContext(GlobalContext)
	const router = useRouter()

	const [skupnaOcena, setSkupnaOcena] = useState(ocena)
	const [steviloOcen, setSteviloOcen] = useState(stOcen)
	const [starsHovered, setStarsHovered] = useState(trenutnaOcena)
	const [stars, setStars] = useState(trenutnaOcena)

	const [imaVsecek, setImaVsecek] = useState(jeVseckan)
	const [imaNevsecek, setImaNevsecek] = useState(jeNevseckan)
	const [stVseckov, setStVseckov] = useState(vsecki)
	const [stNevseckov, setStNevseckov] = useState(nevsecki)
	const [jeGlasovanjeOnemogoceno, setJeGlasovanjeOnemogoceno] = useState(false)

	const date = new Date(timestamp)
	const datum = date.getDate() + ". " + (date.getMonth() + 1) + ". " + date.getFullYear()

	const dodeliOceno = (ocena) => {
		if (!jeGlasovanjeOnemogoceno) {
			setStarsHovered(ocena)

			setJeGlasovanjeOnemogoceno(true)
			oceni(router, global.token, id, !!global.token, ocena).then(() => {
				setJeGlasovanjeOnemogoceno(false)
			})

			setSkupnaOcena(skupnaOcena + ocena - stars)
			setSteviloOcen(steviloOcen + (stars === 0 ? 1 : 0))
			setStars(ocena)
		}
	}

	return (
		<div className="md:m-8 md:gap-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
			<div>
				<div className="inline-flex">
					<button
						id={"gumb_vsecek_" + index}
						disabled={isArchived || jeGlasovanjeOnemogoceno}
						onClick={() => {
							setJeGlasovanjeOnemogoceno(true)
							vseckaj(router, global.token, id, !!global.token).then(() => {
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
						className={(!isArchived ? "bg-green-100 rounded-lg " : "") + (imaNevsecek ? "opacity-20" : "opacity-100")}
					>
						<ArrowSquareUp size={64} color={isArchived ? "rgb(0, 0, 0)" : "rgb(0, 210, 0)"} />
					</button>
					<p className="text-2xl font-bold font-mono ml-4 mt-4">{stVseckov}</p>
				</div>
				<div></div>

				<div className="inline-flex">
					<button
						id={"gumb_nevsecek_" + index}
						disabled={isArchived || jeGlasovanjeOnemogoceno}
						onClick={() => {
							setJeGlasovanjeOnemogoceno(true)
							nevseckaj(router, global.token, id, !!global.token).then(() => {
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
						className={(!isArchived ? "bg-red-50 rounded-lg " : "") + (imaVsecek ? "opacity-20" : "opacity-100")}
					>
						<ArrowSquareDown size={64} color={isArchived ? "rgb(0, 0, 0)" : "rgb(220, 0, 0)"} />
					</button>
					<p className="text-2xl font-bold font-mono ml-4 mt-4">{stNevseckov}</p>
				</div>
			</div>

			<div className="md:col-span-3 lg:col-span-5 mt-8 md:mt-0 mb-16">
				<div className="group cursor-pointer" onClick={() => router.push((isArchived ? "/arhiv/" : "/predlog/") + id)}>
					<div className="flex items-start">
						<div>
							<h1 className="font-bold font-mono break-words text-xl text-black group-hover:underline">
								{naslov.split(" ").length > 30 ? naslov.split(" ").slice(0, 30).join(" ") + " ..." : naslov}
							</h1>
							<div className="flex flex-row">
								<p className="block font-bold font-mono my-4 mr-8 text-md text-black">{user}</p>
								<p className="block font-bold font-mono my-4 text-md text-gray-500">{datum}</p>
							</div>
						</div>
					</div>
					<p className="font-mono break-words font-sm text-gray-500">{besedilo.split(" ").length > 100 ? besedilo.split(" ").slice(0, 100).join(" ") + " ..." : besedilo}</p>
				</div>
				{isArchived && (
					<div className="container row-span-1">
						<ul className="flex flex-wrap items-center px-4 mt-3 ml-0 pl-1" onMouseLeave={() => setStarsHovered(stars)}>
							<li className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"} onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 1)} onClick={() => dodeliOceno(1)}>
								<Star size={32} color={starsHovered >= 1 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
							</li>
							<li className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"} onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 2)} onClick={() => dodeliOceno(2)}>
								<Star size={32} color={starsHovered >= 2 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
							</li>
							<li className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"} onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 3)} onClick={() => dodeliOceno(3)}>
								<Star size={32} color={starsHovered >= 3 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
							</li>
							<li className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"} onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 4)} onClick={() => dodeliOceno(4)}>
								<Star size={32} color={starsHovered >= 4 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
							</li>
							<li className={jeGlasovanjeOnemogoceno ? "" : "cursor-pointer"} onMouseEnter={() => setStarsHovered(jeGlasovanjeOnemogoceno ? stars : 5)} onClick={() => dodeliOceno(5)}>
								<Star size={32} color={starsHovered >= 5 ? "rgb(235, 200, 60)" : "rgb(0, 0, 0)"} className="mr-0.5 mb-2" />
							</li>
							<li className="-mt-1 pl-4 text-lg" onMouseEnter={() => setStarsHovered(stars)}>
								{(skupnaOcena / steviloOcen).toFixed(1) + " (" + steviloOcen + ")"}
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}
