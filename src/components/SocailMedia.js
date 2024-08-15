"use client";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
function SocailMedia({ isVisible }) {
  return (
    <div
      className={`hidden md:flex flex-col justify-center  items-end transition-all duration-500 animate-slide-in ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
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
  );
}

export default SocailMedia;
