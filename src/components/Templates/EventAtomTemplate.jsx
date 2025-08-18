import React from "react";
import PagesHero from "@/components/Bloks/PagesHero";
import Image from "next/image";
import { getNestedVals } from "@/utils";

function EventAtomTamplate({ story }) {
  const pages_hero = getNestedVals(story, ["content", "pages_hero"], null);
  const description = getNestedVals(story, ["content", "Description"], null);
  const images = getNestedVals(story, ["content", "images"], null);

  // Define different image configurations for varied layouts
  const imageConfigs = [
    {
      width: 1200,
      height: 600,
      className: "rounded-lg w-full h-auto object-cover",
      colSpan: "md:col-span-6",
    },
    {
      width: 1200,
      height: 600,
      className: "rounded-lg w-full h-auto object-cover",
      colSpan: "md:col-span-6",
    },
    {
      width: 1600,
      height: 1200,
      className: "w-full h-auto object-cover",
      colSpan: "md:col-span-5",
    },
    {
      width: 600,
      height: 670,
      className: "w-full h-auto object-cover",
      colSpan: "md:col-span-6",
    },
    {
      width: 800,
      height: 500,
      className: "w-full h-auto object-cover rounded-lg",
      colSpan: "md:col-span-6",
    },
    {
      width: 500,
      height: 800,
      className: "w-full h-auto object-cover lg:rounded-b-3xl",
      colSpan: "md:col-span-12",
    },

    {
      width: 500,
      height: 800,
      className: "w-full h-auto object-cover",
      colSpan: "md:col-span-5",
    },
    {
      width: 500,
      height: 800,
      className: "w-full h-auto object-cover",
      colSpan: "md:col-span-6",
    },
  ];

  return (
    <div className="bg-black text-brown-100 ">
      <PagesHero story={pages_hero} />
      <div className="p-4  md:p-4 md:mt-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-14 lg:gap-20">
          <div className="md:col-span-6 my-6 md:my-0 flex items-center justify-center">
            <div className="">
              <p className="text-lg md:mb-4 mb-0 text-left md:mx-0 leading-relaxed max-w-[550px] ">
                {description}
              </p>
            </div>
          </div>

          {/* Dynamic image mapping */}
          {images &&
            images.map((image, index) => {
              const config = imageConfigs[index % imageConfigs.length];
              return (
                <div key={index} className={config.colSpan}>
                  <Image
                    src={image.filename}
                    alt={`Event image ${index + 1}`}
                    width={config.width}
                    height={config.height}
                    className={config.className}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default EventAtomTamplate;
