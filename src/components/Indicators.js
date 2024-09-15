"use client";
import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed left-4 bottom-4 md:bottom-8 animate-bounce ">
        <FaArrowDown className="w-6 h-6 text-brown-300 transition-transform duration-10 hover:scale-125 cursor-pointer" />
      </div>

      <div
        className={`fixed left-[4.8%] md:left-5 lg:text-2xl md:text-xl md:top-[37%] top-20 transform -translate-y-1/2  text-brown-200 text-center font-igc transition-all animate-slide-in ${
          isVisible
            ? "animate-slide-in-top opacity-100"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="transform rotate-90 origin-left">
          <span>CREATE • SHARE • INSPIRE</span>
        </div>
      </div>

      <div className={`fixed bottom-4 right-10 md:hidden`}>
        <div className="flex justify-center space-x-4 text-brown-200">
          {[FaTwitter, FaFacebook, FaInstagram, FaYoutube].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 hover:scale-125 cursor-pointer z-20"
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
