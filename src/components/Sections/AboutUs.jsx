"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { PropagateLoader } from "react-spinners";

export default function AboutUs(props) {
  const { blok } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    if (imageLoaded) {
      setTimeout(() => setIsVisible(true), 500); // Delay the animation slightly after image load
    }
  }, [imageLoaded]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="section relative overflow-hidden min-h-screen flex items-center justify-center z-10 bg-[#000000]"
      {...storyblokEditable(blok)}
    >
      {blok.hero_image.filename ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full max-h-[700px]"
        >
          <Image
            src={`${blok.hero_image.filename}`}
            alt={blok.hero_image.alt}
            fill
            quality={100}
            priority
            onLoadingComplete={() => setImageLoaded(true)}
            className="object-contain object-center"
            sizes="100vw"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PropagateLoader color="#fff" />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-950 opacity-120"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-black-900 bg-opacity-10 flex justify-between md:p-8 "
      >
        <div className="flex flex-col justify-between flex-grow"></div>
      </motion.div>
    </motion.section>
  );
}
