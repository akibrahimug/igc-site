"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const normalizeImageSrc = (src) => {
  if (typeof src !== "string") return "";
  const cleaned = src.trim();
  if (!cleaned) return "";
  if (cleaned.startsWith("//")) return `https:${cleaned}`;
  if (cleaned.startsWith("http://")) return cleaned.replace(/^http:\/\//, "https://");
  return cleaned;
};

const resolveHero = (story) => {
  const base =
    Array.isArray(story) && story.length > 0 ? story[0] : story || {};

  const imageField = base?.hero_image;
  const filename =
    typeof imageField === "string"
      ? imageField
      : imageField?.filename || base?.image?.filename || "";
  const imageSrc = normalizeImageSrc(filename);
  const imageAlt =
    (typeof imageField === "object" && imageField?.alt) ||
    base?.hero_title ||
    base?.title ||
    "Page hero";
  const title = base?.hero_title || base?.title || "";

  return { imageSrc, imageAlt, title };
};

function PagesHero({ story }) {
  const { imageSrc, imageAlt, title } = resolveHero(story);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-screen w-full">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                quality={100}
                priority
                fill
                sizes="100vw"
              />
            ) : (
              <div className="absolute inset-0 bg-black" />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
              <div className="text-center text-brown-100">
                <h1 className="text-center md:text-[150px] text-5xl lg:text-[200px] mb-6 font-bebas-neue">
                  {title}
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
