import Image from "next/image";
import Banner from "../Banner-fullscreen";

export default function Template2({ title, description, image }) {
	return (
		<div className=" text-white mt-0">
			<Banner title={title} image={"https://www.igcfashion.africa/images/home3.png"} />

			{/* <p className="my-6 max-w-3xl text-justify">
				{description}
			</p> */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
				<div className="flex items-center justify-between rounded-lg p-4">
					<p className="md:max-w-xl text-justify">
						"At IGC, we recognize the urgent environmental challenges facing Uganda and the global fashion industry. Globally, the fast fashion industry
						contributes significantly to carbon emissions, water pollution, and deforestation. In Uganda, we face high vulnerability to climate change due to
						several compounding challenges, including waste colonialism, with a staggering 80,000 tonnes of polluting second-hand clothing imported annually,
						rapid deforestation at a rate of 3% per year, and widespread neglect of climate-related issues."
					</p>
				</div>
				<div className="relative h-96">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Gugumuka fashion"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-4 md:gap-8">
				<div className="col-span-3 row-span-2">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in large textured coat"
						width={400}
						height={800}
						className="h-128 w-full object-cover"
					/>
					<div className="col-span-3 bg-black text-white p-4">
						<p className="md:max-w-xl text-justify">
						We use 99% natural or upcycled materials, promoting traditional materials like Lubugo (barkcloth). This 100% natural, renewable material is sourced from self-regenerative Mutuba trees, preserving ancientWe address this by championing indigenous materials in our fashion designs, conducting and sharing research on forgotten histories, and engaging in educational initiatives. Our approach intertwines cultural preservation with environmental sustainability, what we call "Afro-sustainability," recognizing that ancestral knowledge often holds solutions to contemporary challenges. By creating demand for materials like Lubugo, we support local artisans, preserve cultural practices, and even contribute to language preservation. Through these efforts, we aim to renew pride in Ugandan culture, protect indigenous knowledge from biopiracy, and counter the dominance of imported second-hand clothing that dilutes local fashion traditions.
						forests alongside cultural heritage. Our fully traceable supply chain ensures we're not contributing to deforestation.
						</p>
					</div>
				</div>
				<div className="col-span-3 flex items-center bg-black text-white p-4">
					<p className="text-lg md:text-3xl font-bold md:max-w-sm">“Ultimately, our work will elevate Lubugo, positioning it as a crucial element in the dialogue on sustainable fashion and cultural preservation.
					”</p>
				</div>
				<div className="col-span-3">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in white patterned dress"
						width={400}
						height={400}
						className="w-full h-[900px] object-cover"
					/>
				</div>
				<div className="col-span-3">
				<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in large textured coat"
						width={400}
						height={800}
						className="h-96 w-full object-cover"
					/>
				</div>
				<div className="col-span-3">
				<p className="md:max-w-md text-justify">Lubugo has been integral to Baganda cultural identity since the dawn of the Buganda Kingdom (13th or 14th century), predating other Ugandan textile traditions, including weaving. Its rich history has seen the material be used in multiple capacities, both as a valuable commodity, a majestic adornment for Baganda monarchy, attire and household upholstery for commoners, and even as an accessory to spiritual practices. Regardless of its complex trading history, the manufacture of this material had remained relatively unchanged since the dawn of its existence.</p>
				</div>

			</div>

			<div className="grid grid-cols-1 md:grid-cols-6 gap-8 my-6">
			<div className="relative h-96 md:col-span-3">
			<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in large textured coat"
						width={400}
						height={800}
						className="h-96 w-full object-cover"
					/>
				</div>
				<div className="relative h-96 md:col-span-3">
				<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in large textured coat"
						width={400}
						height={800}
						className="h-96 w-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

function ChevronLeftIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m15 18-6-6 6-6" />
		</svg>
	);
}

function ChevronRightIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m9 18 6-6-6-6" />
		</svg>
	);
}
