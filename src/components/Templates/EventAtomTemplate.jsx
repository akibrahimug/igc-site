import React from "react";
import PagesHero from "@/components/Bloks/PagesHero";
import Image from "next/image";
import { getNestedVals } from "@/utils";
// atom in this case means a single event page

function EventAtomTamplate({ story }) {
  const pages_hero = getNestedVals(story, ["content", "pages_hero"], null);
  const description = getNestedVals(story, ["content", "Description"], null);
  const images = getNestedVals(story, ["content", "event_images"], null);

  return (
    <div className="bg-black text-white">
      <PagesHero story={pages_hero} />
      <div className="p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-24">
          <div className="md:col-span-4">
            <div className="flex flex-col gap-4 justify-between align-baseline">
              <div className="h-1/2">
                <p></p>
              </div>
              <p className="text-justify">{description}</p>
            </div>
          </div>
          <div className="md:col-span-4" />
          <div className="md:col-span-4">
            <Image
              src={images[0]["filename"]}
              alt="Fashion showcase"
              width={600}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-8">
            <Image
              src={images[1]["filename"]}
              alt="Fashion event"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-4">
            <Image
              src={images[2]["filename"]}
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

export default EventAtomTamplate;
