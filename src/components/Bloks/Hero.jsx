"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { PropagateLoader } from "react-spinners";
const Hero = (props) => {
  const { blok } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    if (imageLoaded) {
      setTimeout(() => setIsVisible(true), 500); // Delay the animation slightly after image load
    }
  }, [imageLoaded]);

  return (
    <section
      className="section relative overflow-hidden min-h-screen flex items-center justify-center z-10"
      {...storyblokEditable(blok)}
    >
      {blok.hero_image.filename ? (
        <Image
          src={`${blok.hero_image.filename}`}
          alt={blok.hero_image.alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          onLoadingComplete={() => setImageLoaded(true)}
        />
      ) : (
        <PropagateLoader color="#fff" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-950 opacity-120"></div>
      <div className="absolute inset-0 bg-black-900 bg-opacity-10 flex justify-between md:p-8 ">
        <div className="flex flex-col justify-between flex-grow"></div>
      </div>
    </section>
  );
};

export default Hero;
