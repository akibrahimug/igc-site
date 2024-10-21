export default async function Environment() {
	return (
		<>
			<div className="h-screen overflow-auto snap-y">
				<div className=" md:mx-32 mx-4">
				
					<h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">ENVIRONMENT</h1>
					<div className="flex flex-col md:flex-row justify-center items-center space-x-16">
						<div className="text-center mx-8">
							<p className="text-2xl font-bold">3%</p>
							<p className="text-2xl font-bold">80,000</p>
							<p className="text-2xl font-bold">TONNES</p>
							<p className="text-2xl font-bold">80%</p>
						</div>
						<div>
							<p className="text-justify max-w-md">
								At IGC, we recognize the urgent environmental challenges facing Uganda and the global fashion industry. Globally, the fast fashion industry
								contributes significantly to carbon emissions, water pollution, and deforestation. In Uganda, we face high vulnerability to climate change due
								to several compounding challenges, including waste colonialism, with a staggering 80,000 tonnes of polluting second-hand clothing imported
								annually, rapid deforestation at a rate of 3% per year, and widespread neglect of climate-related issues.
							</p>
						</div>
					</div>
					{/* <div>
						<img className="w-full h-48 mx-8 object-cover" src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" alt="Environment" />
					</div> */}
					<div class="flex flex-1 justify-center mt-2">
						<img class="h-96 w-full object-cover" src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" />
					</div>
					<div className="flex flex-row items-center m-8 justify-center space-x-5 md:flex-row md:justify-between md:items-center">
						<div>
							<p className="font-bold md:text-6xl text-3xl">99%</p>
						</div>
						<div>
							<p className="font-bold md:text-6xl text-3xl">100%</p>
						</div>
						<div className="flex-auto md:flex-none">
							<img className="w-full md:h-[700px] " src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" alt="Environment" />
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-2">
						<div>
							<img className="w-full object-cover" src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" alt="Environment" />
						</div>
						<div>
							<p className="text-justify">
								We use 99% natural or upcycled materials, promoting traditional materials like Lubugo (barkcloth). This 100% natural, renewable material is
								sourced from self-regenerative Mutuba trees, preserving ancient forests alongside cultural heritage. Our fully traceable supply chain ensures
								we're not contributing to deforestation.
							</p>
							<p className="mt-8 font-bold text-center text-lg md:text-2xl">"Our solution is rooted in sustainable, culturally significant practices."</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row md:space-x-48 items-center mt-4">
						<div className="text-center md:max-w-lg">
							<p className="text-justify">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, distinctio voluptas aliquid quisquam praesentium assumenda consequuntur in
								alias optio numquam accusamus dolore sint provident maxime repellendus quo corporis. Eius, minus? Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Enim harum laudantium, delectus magnam tempore, minima magni optio, quod deleniti velit sint quae id rem sunt. Alias nulla
								atque corrupti ipsum.
							</p>
						</div>
						<div>
							<p className="md:text-6xl text-3xl">99%</p>
						</div>
					</div>
					{/* <img className="w-full h-48 mx-8 object-cover" src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" alt="Environment"/> */}
					<div className="flex flex-col md:flex-row md:justify-between md:space-x-12 my-8 space-y-8">
						<div className="md:w-1/2 flex-auto md:flex-none">
							<img className="w-full h-96 object-cover" src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" alt="" />
							<p className="text-justify mt-4">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos tempora, aperiam est rerum, eveniet, enim in sed fuga consequuntur harum
								eius ut eligendi sit obcaecati minus maiores nemo iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est esse dolor id explicabo exercitationem consectetur laudantium sequi quisquam hic incidunt quo omnis sint magnam voluptatum officiis, aut, rem accusamus distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime, odit officiis quasi ex quisquam omnis, similique voluptatem itaque adipisci optio. Omnis consequuntur minus excepturi ipsum cum. Adipisci, quis cumque.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<p className="font-bold text-center text-lg md:text-2xl mb-4">"Our solution is rooted in sustainable, culturally significant practices."</p>
							<img className="h-[600px] object-cover" src="https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" alt="" />
						</div>
					</div>
				</div>
		</div>
		</>
	);
}
