export default async function Environment() {
	return (
		<>
			<div className="h-screen overflow-auto snap-y scroll-smooth overscroll-contain">
				<div className="md:mt-32 md:mx-32 mt-16 mx-4">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">ENVIRONMENTS</h1>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-center mx-8">
							<p className="text-2xl font-bold">3%</p>
							<p className="text-2xl font-bold">80,000</p>
							<p className="text-2xl font-bold">TONNES</p>
							<p className="text-2xl font-bold">80%</p>
						</div>
						<div>
							<p className="text-justify">
								At IGC, we recognize the urgent environmental challenges facing Uganda and the global fashion industry. Globally, the fast fashion industry
								contributes significantly to carbon emissions, water pollution, and deforestation. In Uganda, we face high vulnerability to climate change due
								to several compounding challenges, including waste colonialism, with a staggering 80,000 tonnes of polluting second-hand clothing imported
								annually, rapid deforestation at a rate of 3% per year, and widespread neglect of climate-related issues.
							</p>
						</div>
					</div>
					{/* <div>
						<img className="w-full h-48 mx-8 object-cover" src="https://picsum.photos/id/11/2500/1667.jpg" alt="Environment" />
					</div> */}
					<div class="flex flex-1 justify-center mt-2">
						<img class="h-48 w-full object-cover" src="https://picsum.photos/id/11/2500/1667.jpg" />
					</div>
					<div className="flex flex-row items-center m-8 justify-between space-x-5 md:flex-row md:justify-between md:items-center">
						<div>
							<p className="md:text-6xl text-3xl">99%</p>
						</div>
						<div>
							<p className="md:text-6xl text-3xl">100%</p>
						</div>
						<div className="flex-auto md:flex-none">
							<img className="w-full md:h-48" src="https://picsum.photos/id/11/2500/1667.jpg" alt="Environment" />
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-2">
						<div>
							<img className="w-full object-cover" src="https://picsum.photos/id/11/2500/1667.jpg" alt="Environment" />
						</div>
						<div>
							<p className="text-justify">
								We use 99% natural or upcycled materials, promoting traditional materials like Lubugo (barkcloth). This 100% natural, renewable material is
								sourced from self-regenerative Mutuba trees, preserving ancient forests alongside cultural heritage. Our fully traceable supply chain ensures
								we're not contributing to deforestation.
							</p>
							<p className="mt-8">"Our solution is rooted in sustainable, culturally significant practices."</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row md:space-x-48 items-center mt-4">
						<div className="text-center md:w-7/12">
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
					{/* <img className="w-full h-48 mx-8 object-cover" src="https://picsum.photos/id/11/2500/1667.jpg" alt="Environment"/> */}
					<div className="flex flex-col md:flex-row md:justify-between md:space-x-12 my-8 space-y-8">
						<div className="md:w-1/2">
							<img className="w-full h-96" src="https://picsum.photos/id/11/2500/1667.jpg" alt="" />
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos tempora, aperiam est rerum, eveniet, enim in sed fuga consequuntur harum
								eius ut eligendi sit obcaecati minus maiores nemo iure.
							</p>
						</div>
						<div className="md:w-1/2">
							<p className="text-center">"Our solution is rooted in sustainable, culturally significant practices."</p>
							<img className="w-full h-96" src="https://picsum.photos/id/11/2500/1667.jpg" alt="" />
						</div>
					</div>
				</div>
        <div className="flex justify-center">
         <button className="bg-green-700 px-24 py-4">Kwetu kwanza</button>
        </div>

        <div className="flex justify-center md:space-x-32 my-4">
        <div>
          <p>IGC FASHION</p>
          <p>@IGCFASHION</p>
          <p>@IGCFASHION.AFRICA</p>
        </div>
        <div><p>SIGN UP TO THE NEWSLETTER</p></div>
        </div>
			</div>
		</>
	);
}
