import Image from "next/image";

export default function FloorMoves() {
	return (
			<div className="bg-black text-white p-4 mx-8 md:mx-32 lg:mx-48 ">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-5xl md:text-6xl font-bold mb-4">
						FLOOR MOVES TO SLOW FASHION
						{/* <br /> */}
						{/* SLOW FASHION */}
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<p className="text-justify max-w-sm">
							In collaboration with the French Embassy's Solidarity Fund for Innovative Projects (FSPI) and Uganda's Olympic breakdancing team, IGC designed the
							100% upcycled uniforms for the Paris 2024 Olympics. These outfits not only challenge the carbon footprint of sportswear but also celebrate the
							unique styles of each athlete.
						</p>

						<div className="relative">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="Breakdancer in blue outfit"
								width={600}
								height={400}
								className="w-full h-96 object-cover"
							/>
							<div className="absolute inset-0 border-4 border-purple-500 pointer-events-none"></div>
						</div>
					</div>
					{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
					{/* <div className="flex flex-col gap-4 mt-4"> */}
					{/* <div className="flex flex-col-reverse md:flex-row">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="Street scene with breakdancer"
								width={600}
								height={400}
								className="w-full h-96 object-cover"
							/>

							<div className="p-4">
								<p className="text-lg md:text-3xl font-bold italic max-w-sm">
									"Floor Moves to Slow Fashion uniforms reflect the personal and the collective narratives present in both dance and global issues like fast
									fashion."
								</p>
							</div>
						</div>
						<div className="space-y-4 text-justify max-w-sm">
							<p className="max-w-sm">
								As part of the "Floor Moves to Slow Fashion" initiative, this project involved crafting 56 vibrant, patchwork outfits from over 200 discarded
								garments. Workshops with the Olympic breakers explored themes of identity, individuality, and climate change, allowing the uniforms to reflect
								both personal and collective narratives in dance and global issues like fast fashion.
							</p>
						</div> */}

					{/* <div className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-12 md:grid-flow-col gap-4">
						<div className="col-span-8">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="Street scene with breakdancer"
								width={600}
								height={400}
								className="w-full h-96 object-cover"
							/>
						</div>
						<div className="col-span-4">
							<p className="text-lg md:text-3xl font-bold italic max-w-sm">
								"Floor Moves to Slow Fashion uniforms reflect the personal and the collective narratives present in both dance and global issues like fast
								fashion."
							</p>
						</div>
						<div className="col-span-4">
							<p className="max-w-sm text-justify">
								As part of the "Floor Moves to Slow Fashion" initiative, this project involved crafting 56 vibrant, patchwork outfits from over 200 discarded
								garments. Workshops with the Olympic breakers explored themes of identity, individuality, and climate change, allowing the uniforms to reflect
								both personal and collective narratives in dance and global issues like fast fashion.
							</p>
						</div>
						<div className="col-span-4"></div>
						<div className="col-span-4 row-start-3">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="Breakdancer mid-air"
								width={800}
								height={800}
								className="h-[38rem] object-cover md:row-span-2"
							/>
						</div>
						<div className="col-span-4 md:col-start-9 md:row-span-2">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="People on floor with FLOOR text"
								width={1200}
								height={300}
								className="w-full h-128 object-cover md:row-start-2"
							/>
						</div>

						<Image
                                src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
                                alt="People on floor with FLOOR text"
                                width={1200}
                                height={300}
                                className="w-full h-64 object-cover md:row-start-2"
                            />
                            <Image
                                src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
                                alt="Breakdancer mid-air"
                                width={800}
                                height={800}
                                className="h-[38rem] object-cover md:row-span-2"
                            />
					</div> */}
					<div className="grid grid-rows-3 grid-cols-12 grid-flow-col gap-4 mt-4">
						<div className="col-span-8">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="Street scene with breakdancer"
								width={600}
								height={400}
								className="w-full h-96 object-cover"
							/>
						</div>
						<div className="col-span-4 col-start-9">
							<p className="text-lg md:text-3xl font-bold italic max-w-sm">
								"Floor Moves to Slow Fashion uniforms reflect the personal and the collective narratives present in both dance and global issues like fast
								fashion."
							</p>
						</div>
						<div className="col-span-4">
							<p className="max-w-sm text-justify">
								As part of the "Floor Moves to Slow Fashion" initiative, this project involved crafting 56 vibrant, patchwork outfits from over 200 discarded
								garments. Workshops with the Olympic breakers explored themes of identity, individuality, and climate change, allowing the uniforms to reflect
								both personal and collective narratives in dance and global issues like fast fashion.
							</p>
						</div>
						{/* <div className="col-span-4"></div> */}
						<div className="col-span-4 row-start-2 row-span-2 col-start-9">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="Breakdancer mid-air"
								width={800}
								height={800}
								className="h-[38rem] object-cover md:row-span-2"
							/>
						</div>
						{/* <div className="col-span-4 row-start-3 col-start-1">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="People on floor with FLOOR text"
								width={1200}
								height={300}
								className="w-full h-128 object-cover md:row-start-2"
							/>
						</div> */}
						<div className="md:col-span-8">
							<Image
								src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
								alt="Street scene with breakdancer"
								width={600}
								height={400}
								className="w-full h-96 object-cover"
							/>
						</div>
					</div>

					{/* </div> */}

					<div className="mt-8 space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="p-4 flex items-center">
								<p className="text-justify">
									IGC's commitment to sustainability is evident in sourcing materials solely from some of 2000 local vendors in Uganda's largest second-hand
									market, Owino. By setting a new standard for sustainable sportswear, these uniforms empower Uganda's breakdance team to showcase their talent
									while igniting crucial conversations about the environmental impact of textile waste, 70% of which is discarded in Africa, through a process
									known as waste colonialism.
								</p>
							</div>
							<div className="relative">
								<Image
									src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
									alt="Dancers in a circle"
									width={600}
									height={600}
									className="w-full h-96 object-cover"
								/>
								<div className="absolute inset-0 border-4 border-purple-500 pointer-events-none"></div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 md:gap-10">
							{["People working with clothing materials", "Person sewing on a machine", "Hands drawing or writing", "Person posing with clothing items"].map(
								(alt, index) => (
									<Image
										key={index}
										src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg"
										alt={alt}
										width={300}
										height={200}
										className="w-full h-128 object-cover"
									/>
								)
							)}
						</div>
					</div>
				</div>
			</div>
	);
}
