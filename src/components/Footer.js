export default function Footer() {
	return (
		<div className="border-t-2 border-t-black mt-12">
			<div className="container mx-auto m-6 flex justify-between px-4">
				<span className="text-black font-bold font-mono text-xl">
					<a>Obveščevalnik</a>
				</span>
				<ul className="flex flex-wrap items-center text-sm">
					{/* <li>
            		<a href="#" className="m-5 text-md block px-4 text-black font-bold font-mono hover:underline text-lg">1st option</a>
        		</li>
        		<li>
            		<a href="#" className="m-5 mt-6 text-md block px-4 text-black font-bold font-mono hover:underline text-lg">2nd option</a>
        		</li>
        		<li>
            		<a href="#" className="m-5 mt-6 text-md block px-4 text-black font-bold font-mono hover:underline text-lg">3rd option</a>
        		</li> */}
					<li>
						<a className="text-md block text-black font-bold font-mono hover:underline text-lg">Ekipa 24</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
