import Image from 'next/image'
import Link from 'next/link'
import Banner from '../Banner-fullscreen'

export default function Template3({projects, title, description, image }) {

  return (
    <div className="bg-black text-white">      
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