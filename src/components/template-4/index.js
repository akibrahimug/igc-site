import Image from "next/image";
import Banner from "../Banner-fullscreen";
import Link from "next/link";

export default function Template4({ title, description, image, projects }) {
	return (
		<div className="bg-black text-white p-4 mt-0">
			<Banner title={title} image={image} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
        {projects.map((project, index) => (
          <Link href={project.href} key={index}>
            <div key={index} className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                // layout="fill"
                width={600}
								height={1200}
                objectFit="cover"
                className="rounded-lg"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold text-center px-4">{project.title}</h2>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
			<p className="my-6 max-w-3xl text-justify">{description}</p>
			<div className="relative h-128 mb-6">
				<Image
					src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
					alt="Lubugo fabric detail"
					layout="fill"
					objectFit="cover"
					className="rounded-lg"
				/>
			</div>
			{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
				<div className="flex items-center justify-center rounded-lg p-4">
					<p className="text-xl font-bold text-right md:text-3xl">"Gugumuka means 'wake-up'. Wake up to the history. Wake up to your roots."</p>
				</div>
				<div className="relative h-128">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Gugumuka fashion"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
			</div> */}
			<div className="mx-auto grid grid-cols-6 gap-4 md:gap-8">
				<div className="col-span-2">
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in brown coat on rocky shore"
						width={600}
						height={400}
						className="w-full h-auto object-cover"
					/>
					
				</div>
				<div className="col-span-2"></div>
				<div className="col-span-2 relative">
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
					<p className="text-lg md:text-3xl font-bold justify-center">
						"Gugumuka urges us to recognize overlooked histories, emphasising Lubugo's role in resistance—historically against colonialism, and today against
						climate change."
					</p>
				</div>
				<div className="col-span-3 row-span-2">
					{/* <Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in large textured coat"
						width={400}
						height={800}
						className="h-[38rem] w-full object-cover"
					/> */}
					<Image
                src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
                
                // layout="fill"
                width={900}
								height={1200}
                objectFit="cover"
                className="rounded-lg"
              />
					<div className="col-span-3 flex items-center justify-center bg-black text-white p-4">
						<p className="text-lg md:text-3xl font-bold text-right max-w-xl">"Gugumuka means 'wake-up'. Wake up to the history. Wake up to your roots."</p>
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
