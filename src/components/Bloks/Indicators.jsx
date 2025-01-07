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

  const [scrolled, setIsPageScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    !scrolled && (
      <>
        <div className="fixed left-4 bottom-4 md:bottom-8 animate-bounce z-40">
          <FaArrowDown className="w-6 h-6 text-brown-100 transition-transform duration-10 hover:scale-125 cursor-pointer" />
        </div>

        <div className={`fixed bottom-4 right-10 md:hidden z-40`}>
          <div className="flex justify-center space-x-4 text-brown-100">
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
    )
  );
};

export default ScrollIndicator;
