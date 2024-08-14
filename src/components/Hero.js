"use client";
import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

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
    <div
      className="relative h-screen overflow-hidden"
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
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-800 via-transparent to-green-800 opacity-50"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-between md:p-8">
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

        <div
          className={`hidden md:flex flex-col justify-center  items-end transition-all duration-500 animate-slide-in ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="p-4 bg-brown-100 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl mt-20 lg:mt-0">
            <div className="relative lg:h-64 h-24 mb-4 ">
              <div className="absolute right-3 top-0 w-px h-full bg-brown-100"></div>
            </div>
            <div className="flex flex-col space-y-4 text-brown-100">
              {[FaTwitter, FaFacebook, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    className="w-6 h-6 transition-transform duration-300 hover:scale-125 cursor-pointer"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute bottom-4 left-4 right-4 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div className="flex justify-center space-x-4 text-brown-100">
          {[FaTwitter, FaFacebook, FaInstagram, FaYoutube].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 transition-transform duration-300 hover:scale-125 cursor-pointer"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
