"use client";
import React from "react";
import PagesHero from "@/components/Bloks/PagesHero";
import Banner from "@/components/Bloks/Banner";
import { useIgcData } from "@/app/ContextProvider";
import PortfolioGalleryTemplate from "@/components/Templates/PortfolioGalleryTemplate";
import { motion } from "framer-motion";
function Events() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }
  const blok = story.content;
  const banner = blok.banner;
  const page_hero = blok.pages_hero;
  const portfolio_gallery = blok.portfolio_gallery_atom;
  return (
    <motion.div
      className="bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        anima be={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <PagesHero story={page_hero} />

        {/* Overlay fade effect on hero */}
        <motion.div
          className="absolute bottom-0 inset-x-0 h-32 md:h-48 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Fade Transition Span */}
      <motion.div
        className="relative h-7 md:h-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black to-transparent"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <Banner blok={banner} />

        {/* Overlay fade effect on banner */}
        <motion.div
          className="absolute top-0 inset-x-0 h-24 md:h-32 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
        </motion.div>

        {/* Bottom fade-out effect on banner */}
        <motion.div
          className="absolute bottom-0 inset-x-0 h-24 md:h-32 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 p-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <PortfolioGalleryTemplate story={portfolio_gallery} />
      </motion.div>
    </motion.div>
  );
}

export default Events;
