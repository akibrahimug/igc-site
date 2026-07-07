"use client";
import React from "react";
import { getAssetSrc } from "@/utils/storyblok";

const pickFirstEntry = (value) => {
  if (Array.isArray(value)) return value[0] || {};
  if (value && typeof value === "object") return value;
  return {};
};

const resolveHero = ({ story, title, image }) => {
  const base = pickFirstEntry(story);
  const imageField = base?.hero_image || base?.image || null;
  const imageSrc = getAssetSrc(image) || getAssetSrc(imageField);
  const resolvedTitle = title || base?.hero_title || base?.title || "";
  const imageAlt =
    (typeof imageField === "object" && imageField?.alt) || resolvedTitle || "Page hero";

  return { imageSrc, imageAlt, title: resolvedTitle };
};

function PagesHero({ story, title, image }) {
  const { imageSrc, imageAlt, title: resolvedTitle } = resolveHero({
    story,
    title,
    image,
  });

  return (
    <div className="relative h-screen w-full">
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
        <div className="text-center text-brown-100">
          <h1 className="text-center md:text-[150px] text-5xl lg:text-[200px] mb-6 font-bebas-neue">
            {resolvedTitle}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PagesHero;
