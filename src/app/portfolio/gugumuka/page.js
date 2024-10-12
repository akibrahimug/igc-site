import Image from "next/image";

export default function Gugumuka() {
	return (
		<div className="h-screen overflow-auto snap-y scroll-smooth overscroll-contain bg-black-950">
			<div className="bg-black text-white p-4 md:mx-32 lg:mx-48">
				<h1 className="text-5xl text-center md:text-6xl font-bold mb-6">GUGUMUKA</h1>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
					{[
						"https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg",
						"https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg",
						"https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg",
					].map((src, index) => (
						<div key={index} className="relative h-96">
							<Image src={src} alt={`Gugumuka fashion ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
						</div>
					))}
				</div>

				<p className="mb-6 text-sm">
					The Gugumuka collection was inspired by the stigma around the Lubugo fabric within Uganda society due to its untold history and miseducation around
					it. This fabric, also known as barkcloth, is made out of the bark of a tree and is an integral part of Baganda culture identity in Uganda. Demonised
					and erased under colonial rule, Lubugo and other such items / symbols of culture and tradition in Uganda have contributed to local and global
					ignorance surrounding African culture, history and tradition.
				</p>

				<div className="relative h-64 mb-6">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Lubugo fabric detail"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
					<div className="relative h-64">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Gugumuka fashion"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
					<div className="flex items-center justify-center rounded-lg p-4">
						<p className="text-xl font-bold text-center">"Gugumuka means 'wake-up'. Wake up to the history. Wake up to your roots."</p>
					</div>
				</div>

				<div className="max-w-4xl mx-auto grid grid-cols-6 gap-4">
					<div className="col-span-3">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in brown coat on rocky shore"
							width={400}
							height={400}
							className="w-full h-auto object-cover"
						/>
					</div>
					<div className="col-span-3 relative">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Close-up of person in textured garment"
							width={400}
							height={400}
							className="w-full h-auto object-cover"
						/>
						<div className="absolute inset-0 border-4 border-purple-500 pointer-events-none"></div>
					</div>
					<div className="col-span-3 flex items-center bg-black text-white p-4">
						<p className="text-lg font-bold">
							"Gugumuka urges us to recognize overlooked histories, emphasising Lubugo's role in resistance—historically against colonialism, and today against
							climate change."
						</p>
					</div>
					<div className="col-span-3 row-span-2">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in large textured coat"
							width={400}
							height={800}
							className="w-full h-[500px] object-cover"
						/>
						<div className="col-span-3 flex items-center justify-center bg-black text-white p-4">
							<p className="text-lg font-bold text-right">"Gugumuka means 'wake-up'. Wake up to the history. Wake up to your roots."</p>
						</div>
					</div>
					<div className="col-span-3">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in white patterned dress"
							width={400}
							height={400}
							className="w-full h-auto object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
