import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    { title: "FLOOR MOVES TO SLOW FASHION", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "GUGUMUKA", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "WE ARE GOING TO MARS", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "MISTAKEN FABRICS", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "MUNSIKO", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "KAMPALA DISASTERS", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
  ]

  return (
    <div className="h-screen overflow-auto snap-y scroll-smooth overscroll-contain bg-black-950">

    <div className="bg-black text-white p-4 md:mx-32 lg:mx-48">      
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">PORTFOLIO</h1>
      
      <p className="mb-8 max-w-4xl text-justify">
        By transforming waste materials into unique products, we minimise environmental impact and avoid intensive manufacturing processes. We collaborate with local artists to amplify voices from regions disproportionately affected by climate change. Through education and promotion of circular fashion practices, we're fostering a generation of conscious 'wastepreneurs'.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="relative h-[500px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold text-center px-4">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}