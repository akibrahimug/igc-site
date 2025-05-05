import React from "react";
import PagesHero from "../Bloks/PagesHero";
import Image from "next/image";

function Template6({ title, description, image }) {
  return (
    <div className="bg-black text-brown-100">
      <PagesHero title={title} image={image} />
      <div className="p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-24">
          <div className="md:col-span-4">
            <div className="flex flex-col gap-4 justify-between align-baseline">
              <div className="h-1/2">
                <p></p>
              </div>
              <p className="text-xl lg:text-lg text-justify leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="md:col-span-4" />
          <div className="md:col-span-4">
            <Image
              src="https://igcfashion.africa/images/home5.png"
              alt="Fashion showcase"
              width={600}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-8">
            <Image
              src="https://igcfashion.africa/images/home3.png"
              alt="Fashion event"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-4">
            <Image
              src="https://igcfashion.africa/images/folio/sample/IMG_3219.JPG"
              alt="Fashion portfolio sample"
              width={600}
              height={670}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template6;
