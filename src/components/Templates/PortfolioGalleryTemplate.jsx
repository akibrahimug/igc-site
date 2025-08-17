"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PortfolioGalleryTemplate({ story }) {
  const [containerRef, isContainerVisible] = useScrollAnimation(0.1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isContainerVisible) {
      setIsVisible(true);
    }
  }, [isContainerVisible]);

  // Single animation variant for all cards
  const cardVariant = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="bg-black text-brown-100" ref={containerRef}>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {story.map((project, index) => {
          // Random timing only - same animation for all cards
          const randomDelay = Math.random() * 2; // Random delay between 0-4 seconds
          const randomDuration = 0.8 + Math.random() * 0.6; // Random duration between 0.8-1.4 seconds

          return (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{
                duration: randomDuration,
                delay: randomDelay, // This makes each card appear at a random time
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <Link
                href={project["project_link"]["cached_url"].split("/")[1]}
                className="block h-full"
              >
                <div className="relative overflow-hidden group h-[600px] w-full">
                  <Image
                    src={project["project_image"]["filename"]}
                    alt={project["project_image"]["filename"]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-all duration-500 group-hover:bg-opacity-10">
                    <h2 className="text-brown-100 text-2xl text-center px-4 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                      {project["project_title"]}
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
