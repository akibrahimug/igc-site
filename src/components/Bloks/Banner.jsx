"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { motion } from "framer-motion";

export default function Banner({ blok }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Convert to array if it's a single object
  const bannerItems = useMemo(() => {
    if (!blok) return [];
    return Array.isArray(blok) ? blok : [blok];
  }, [blok]);

  // Auto-advance images
  useEffect(() => {
    if (
      bannerItems.length === 0 ||
      !bannerItems[0].carousel_images ||
      bannerItems[0].carousel_images.length <= 1
    )
      return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex =
          (prevIndex + 1) % bannerItems[0].carousel_images.length;
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [bannerItems]);

  // Handle case where blok might be undefined or not an array
  if (!blok) {
    console.log("Banner: No blok data provided");
    return null;
  }
  return (
    <motion.div
      className="w-full mt-4 md:mt-6"
      {...storyblokEditable(blok)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {bannerItems.map((item, index) => (
        <div
          key={index}
          className="relative h-64 md:h-[500px] w-full overflow-hidden"
        >
          {/* Background Image Carousel */}
          {item.carousel_images?.map((image, imageIndex) => (
            <motion.div
              key={imageIndex}
              className="absolute inset-0"
              initial={
                imageIndex === 0
                  ? { x: 0, opacity: 1 }
                  : { x: "100%", opacity: 0 }
              }
              animate={
                imageIndex === currentImageIndex
                  ? { x: 0, opacity: 1 }
                  : {
                      x: imageIndex < currentImageIndex ? "-100%" : "100%",
                      opacity: 0,
                    }
              }
              transition={{
                duration: 3,
                ease: "linear",
              }}
            >
              <Image
                src={image.filename}
                alt={image.alt || "Banner image"}
                fill
                className="object-cover"
                priority={imageIndex === 0}
              />
            </motion.div>
          ))}

          {/* Static Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10">
            <motion.div
              className="text-center text-brown-100 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="backdrop-blur-md bg-gradient-to-b from-black/30 via-black/20 to-black/10 rounded-2xl p-8 md:p-10 border border-white/5 shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-bebas-neue font-bold tracking-wider mb-6">
                  {item.banner_title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                  {item.banner_description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.button_link || "#"}
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-brown-100 font-medium tracking-wider border-2 border-brown-100 bg-transparent hover:bg-brown-100 hover:text-black transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brown-100 focus:ring-offset-2 focus:ring-offset-black"
                    prefetch={false}
                  >
                    <span className="relative z-10">
                      {item.button_text || "Get Started"}
                    </span>
                    <div className="absolute inset-0 bg-brown-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
