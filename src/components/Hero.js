"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
// import SocailMedia from "./SocailMedia";
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
      <Image
        src={`${blok.BackgroundImage.filename}/m/`}
        alt={blok.BackgroundImage.alt}
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
        onLoadingComplete={() => setImageLoaded(true)}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-950 opacity-70"></div>
      <div className="absolute inset-0 bg-black-900 bg-opacity-30 flex justify-between md:p-8 ">
        <div className="flex flex-col justify-between flex-grow">
          {/* <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-thin text-brown-100 absolute md:top-24 top-20 left-4 md:left-8">
              {blok.subtitle}
            </h2>
            <div className="absolute md:top-24  right-4 md:right-8 text-4xl font-bold text-brown-100 top-20 ">
              {blok.number}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="absolute md:left-4 md:right-4 transition-all duration-500   ">
        {/* <SocailMedia isVisible={isVisible} /> */}
      </div>
    </section>
  );
};

export default Hero;
