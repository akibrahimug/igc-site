"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
const HomeLastSection = ({ blok }) => {
  const sectionRef = useRef(null);
  console.log(blok);
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
      className="section bg-black-950 opacity-0  flex justify-center "
    >
      <div className="text-center z-20">
        <div className="container mx-auto mt-24">
          <h1 className="text-4xl font-bold mb-6 text-center text-brown-200">
            {blok.Heading}
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-4  sm:gap-x-6 ipad:grid-cols-3 xl:gap-x-8 m-2 "
          >
            {blok["card_images"].map((card) => (
              <li key={card.id} className="relative">
                <div className=" block w-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100  hover:scale-[1.01] transition-all duration-300">
                  <Image
                    src={card.filename}
                    alt=""
                    className="pointer-events-none object-cover w-full h-[550px]"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="m-6">
                  <h3 className="pointer-events-none mt-4 block truncate text-lg text-brown-200 text-left">
                    {card.source}
                  </h3>
                  <p className="pointer-events-none text-brown-100 text-left lg:mb-24">
                    {card.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeLastSection;
