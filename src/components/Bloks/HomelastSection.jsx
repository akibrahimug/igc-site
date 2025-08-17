"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TitleAnimation from "@/components/ui/title-animation";

const HomeLastSection = ({ blok }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-black-950 opacity-0 flex justify-center"
    >
      <div className="text-center z-20">
        <div className="container mx-auto mt-24">
          <TitleAnimation delay={0.2} duration={0.8} y={40}>
            <h1 className="text-4xl font-bold mb-6 text-center text-brown-200">
              {blok.Heading}
            </h1>
          </TitleAnimation>

          <motion.ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-4 sm:gap-x-6 ipad:grid-cols-3 xl:gap-x-8 m-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {blok["card_images"].map((card, index) => (
              <motion.li
                key={card.id}
                className="relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="block w-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:scale-[1.01] transition-all duration-300">
                  <Image
                    src={card.filename}
                    alt=""
                    className="pointer-events-none object-cover w-full h-[550px]"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="m-6">
                  <motion.h3
                    className="pointer-events-none mt-4 block truncate text-lg text-brown-200 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {card.source}
                  </motion.h3>
                  <motion.p
                    className="text-xl lg:text-lg pointer-events-none text-brown-100 text-left lg:mb-24 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {card.name}
                  </motion.p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default HomeLastSection;
