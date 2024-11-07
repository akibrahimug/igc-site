import Image from "next/image";
import Banner from "../Banner-fullscreen";

export default function Template2({title, description }) {
	return (
		<div className="bg-black text-white p-4 mt-0">
			<Banner title={title}/>

			<p className="my-6 max-w-3xl text-justify">
				{description}
			</p>

			<div className="relative h-96 mb-6">
				<Image
					src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
					alt="Lubugo fabric detail"
					layout="fill"
					objectFit="cover"
					className="rounded-lg"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
				<div className="flex items-center justify-center rounded-lg p-4">
					<p className="text-xl font-bold text-right md:text-3xl">"Gugumuka means 'wake-up'. Wake up to the history. Wake up to your roots."</p>
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
			<div className="max-w-4xl mx-auto grid grid-cols-6 gap-4 md:gap-8">
				<div className="col-span-2">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in brown coat on rocky shore"
						width={600}
						height={400}
						className="w-full h-128 object-cover"
					/>
				</div>
				<div className="col-span-2"></div>
				<div className="col-span-2 relative">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Close-up of person in textured garment"
						width={400}
						height={400}
						className="w-full h-128 object-cover"
					/>
					<div className="absolute inset-0 border-4 border-purple-500 pointer-events-none"></div>
				</div>
				<div className="col-span-3 flex items-center bg-black text-white p-4">
					<p className="text-lg md:text-2xl font-bold">
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
						className="h-[38rem] w-full object-cover"
					/>
					<div className="col-span-3 flex items-center justify-center bg-black text-white p-4">
						<p className="text-lg md:text-2xl font-bold text-right">"Gugumuka means 'wake-up'. Wake up to the history. Wake up to your roots."</p>
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
