import Image from "next/image";
import Link from "next/link";

export default function PortfolioGalleryTemplate({ story }) {
  console.log(story, "????????????????????????");
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 p-4">
        {story.map((project, index) => (
          <Link
            href={project["project_link"]["cached_url"].split("/")[1]}
            key={index}
          >
            <div key={index} className="relative overflow-hidden group">
              <Image
                src={project["project_image"]["filename"]}
                alt={project["project_image"]["filename"]}
                width={600}
                height={1200}
                objectFit="cover"
                className="rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-all duration-500 group-hover:bg-opacity-10">
                <h2 className="text-white text-2xl font-bold text-center px-4 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  {project["project_title"]}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
