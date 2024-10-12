import React from "react";
import Image from "next/image";

function Mars() {
	return (
		<div className="h-screen overflow-auto snap-y scroll-smooth overscroll-contain bg-black-950">
			<div className="bg-black text-white p-4 md:mx-32 lg:mx-48">
				<h1 className="text-5xl md:text-7xl font-bold mb-4">WE ARE GOING TO MARS</h1>
				<div className="flex flex-col md:flex-row md:space-x-8">
					<p>
						In collaboration with the Christoph Winkler company, IGC Fashion designed and produced the costumes for the video and to behind Part 1 of the
						choreographic concert and ensemble We Are Going To Mars.
					</p>
					<Image
						src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
						alt="Person in brown coat on rocky shore"
						width={400}
						height={400}
						className="w-full h-64 object-cover"
					/>
				</div>
				<Image
					src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
					alt="Person in brown coat on rocky shore"
					width={400}
					height={400}
					className="w-full h-40 md:h-64 object-cover my-4"
				/>
				<div className="flex flex-col md:flex-row justify-between space-y-4 space-x-4">
					<div>
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in brown coat on rocky shore"
							width={400}
							height={400}
							className="w-full h-96 object-cover"
						/>
					</div>
					<div>
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in brown coat on rocky shore"
							width={400}
							height={400}
							className="w-full h-96 object-cover"
						/>
					</div>
					<div>
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in brown coat on rocky shore"
							width={400}
							height={400}
							className="w-full h-96 object-cover"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
					<div className="col-span-4">
						<p className="mb-4 text-justify">
							This project used music, video, and dance to explore the history of Africa's first space program in Zambia and its inception over the past 50
							years. Founded in 1960 by Edward Mukuka Nkoloso, the program aimed to train "Afronauts" using homemade equipment and to launch the D-Kalu 1 rocket
							on October 24, 1964.
						</p>
						<p className="text-justify">
							It remains uncertain whether this initiative was a serious scientific endeavour or a satirical commentary on imperialism, but the term "Afronauts"
							has since become a cultural touchstone for many people and has influenced movements like Afro-Futurism, as seen across disciplines such as in the
							work of Afro-American musician Sun Ra.
						</p>
					</div>

					<div className="col-span-2">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in brown coat on rocky shore"
							width={800}
							height={400}
							className="w-full h-96 object-cover my-4"
						/>
					</div>
				</div>

				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-3">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in brown coat on rocky shore"
							width={400}
							height={400}
							className="w-full h-64 object-cover"
						/>
					</div>
					<div className="col-span-3">
						<p className="text-lg font-bold italic text-center">"Space is the Place."</p>
					</div>
					<div className="col-span-3 row-span-2">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in large textured coat"
							width={400}
							height={800}
							className="w-full h-72 object-cover"
						/>
					</div>
					<div className="col-span-3 row-span-2">
						<Image
							src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
							alt="Person in large textured coat"
							width={400}
							height={800}
							className="w-full h-72 object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Mars;
