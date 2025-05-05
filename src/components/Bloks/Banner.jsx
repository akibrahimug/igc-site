"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const Banner = () => {
  <Carousel
    className="w-full pt-4"
    plugins={[
      Autoplay({
        delay: 5000,
      }),
    ]}
    opts={{
      loop: true,
    }}
  >
    <CarouselContent>
      <CarouselItem>
        <div className="relative h-64 md:h-[500px] w-full overflow-hidden">
          <Image
            width={100}
            height={100}
            src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
            alt="Banner 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
            <div className="text-center text-brown-100">
              <h2 className="text-4xl font-bold">Discover the Future</h2>
              <p className=" mt-2 text-lg leading-relaxed">
                Innovative solutions for your business
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="relative h-64 md:h-[500px] w-full overflow-hidden">
          <Image
            width={100}
            height={100}
            src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
            alt="Banner 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
            <div className="text-center text-brown-100">
              <h2 className="text-4xl font-bold">Discover the Future</h2>
              <p className="mt-2 text-lg leading-relaxed">
                Innovative solutions for your business
              </p>
            </div>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>;
};
