"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { PropagateLoader } from "react-spinners";
import { motion } from "framer-motion";
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="section relative overflow-hidden min-h-screen flex items-center justify-center z-10"
      {...storyblokEditable(blok)}
    >
      {blok.hero_image.filename ? (
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={`${blok.hero_image.filename}`}
            alt={blok.hero_image.alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            onLoadingComplete={() => setImageLoaded(true)}
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
};

export default Hero;
