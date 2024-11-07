import Image from 'next/image'
import Link from 'next/link'
import Banner from '../Banner-fullscreen'

export default function Template3({projects, title, description }) {

  return (
    <div className="bg-black text-white">      
        <Banner title={title} />
      
      
      {/* <p className="mb-8 max-w-lg text-justify">
        By transforming waste materials into unique products, we minimise environmental impact and avoid intensive manufacturing processes. We collaborate with local artists to amplify voices from regions disproportionately affected by climate change. Through education and promotion of circular fashion practices, we're fostering a generation of conscious 'wastepreneurs'.
      </p> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
        {projects.map((project, index) => (
          <Link href={project.href} key={index}>
            <div key={index} className="relative h-128 overflow-hidden">
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
          </Link>
        ))}
      </div>
      </div>
  )
}