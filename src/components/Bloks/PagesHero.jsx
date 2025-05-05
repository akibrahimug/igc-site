import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function PagesHero({ story }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-screen w-full">
            <Image
              src={story[0]["hero_image"]["filename"]}
              alt="Banner 1"
              className="h-full w-full object-cover"
              quality={100}
              priority
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
              <div className="text-center text-white">
                <h1 className="text-5xl text-center md:text-[200px] mb-6 tracking-widest font-igc">
                  {story[0]["hero_title"]}
                </h1>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default PagesHero;
