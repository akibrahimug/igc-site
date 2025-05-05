import Image from "next/image";
import Link from "next/link";
import PagesHero from "@/components/Bloks/PagesHero";

export default function Template3({ projects, title, description, image }) {
  return (
    <div className="bg-black text-brown-100">
      <PagesHero title={title} image={image} />

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 p-4">
        {projects.map((project, index) => (
          <Link href={project.href} key={index}>
            <div key={index} className="relative overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={1200}
                objectFit="cover"
                className="rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-all duration-500 group-hover:bg-opacity-10">
                <h2 className="text-brown-100 text-2xl font-bold text-center px-4 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 leading-relaxed">
                  {project.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
