"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import SocailMedia from "./SocailMedia";
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-950 opacity-70 "></div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-between md:p-8 ">
        <div className="flex flex-col justify-between flex-grow">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-thin text-brown-100 absolute md:top-24 top-20 left-4 md:left-8">
              {blok.subtitle}
            </h2>
            <div className="absolute md:top-24  right-4 md:right-8 text-4xl font-bold text-brown-100 top-20 ">
              {blok.number}
            </div>
          </div>

          <div className="flex flex-col items-center text-center  font-igc">
            <h1 className="text-4xl md:text-8xl font-bold text-brown-200 mb-4">
              {blok.Title}
            </h1>
            <p className="text-l md:text-2xl text-brown-100 mb-4 md:mb-8 max-w-2xl shadow-text">
              {blok.Description}
            </p>
            <button className="bg-brown-100 text-green-950 px-8 py-3 rounded-full text-lg font-semibold hover:bg-brown-200 transition-colors duration-300 shadow-lg font-igc">
              {blok.ButtonText}
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="absolute md:left-4 md:right-4 transition-all duration-500   ">
        <SocailMedia isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Hero;
