"use client";
import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function AboutUs(props) {
  const { blok } = props;

  return (
    <section
      className="section relative overflow-hidden min-h-screen flex items-center justify-center z-10 bg-[#000000]"
      {...storyblokEditable(blok)}
    >
      {blok.hero_image.filename ? (
        <div className="absolute inset-0 w-full h-full max-h-[700px]">
          <Image
            src={`${blok.hero_image.filename}`}
            alt={blok.hero_image.alt}
            fill
            quality={100}
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
      ) : (
        <div>{/* <PropagateLoader color="#fff" /> */}</div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-950 opacity-120"></div>
      <div className="absolute inset-0 bg-black-900 bg-opacity-10 flex justify-between md:p-8 ">
        <div className="flex flex-col justify-between flex-grow"></div>
      </div>
    </section>
  );
}
