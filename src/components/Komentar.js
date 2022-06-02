export default function Komentar({ user, besedilo, date }) {
	return (
		<div className="mb-12 md:col-span-3 mt-6 md:mt-0">
			<div className="flex items-start mb-2">
				<div className="pr-4">
					<div className="flex flex-row">
						<p className="block font-bold font-mono mb-2 mt-2 mr-8 text-md text-black">
							{user}
						</p>
						<p className="block font-bold font-mono mb-2 mt-2 text-md text-gray-500">
							<time>{date}</time>
						</p>
					</div>
				</div>
			</div>
			<p className="font-mono mb-2 font-sm text-gray-500">
				{besedilo}
			</p>
		</div>
	)
}
