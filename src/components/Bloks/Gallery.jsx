"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";
import TitleAnimation from "@/components/ui/title-animation";

const ImageWithCaption = ({ src, width, height, alt, className, caption }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
    {caption && (
      <p className="text-xl lg:text-lg mt-2 text-left leading-relaxed">
        {caption}
      </p>
    )}
  </motion.div>
);

function Gallery(props) {
  const { blok } = props;
  const { HomePageGallary } = blok;
  const sectionRef = useRef(null);
  const [additionalSets, setAdditionalSets] = useState(0);

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
      className="section bg-black-950 opacity-0 flex justify-center -mt-24 relative text-brown-200"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-black-950 z-10"></div>
      <div className="text-center mx-2">
        <div className="container mx-auto mt-60">
          {/* <TitleAnimation delay={0.2} duration={0.8} y={40}> */}
          <h1 className="text-5xl font-bold mb-8">
            {blok.home_gallery_section_title}
          </h1>
          {/* </TitleAnimation> */}
          <motion.div
            className="grid grid-cols-1 ipad:grid-cols-[2fr_60px_0px_3fr]  md:grid-cols-[1fr_65px_0px_3fr] lg:grid-cols-[1.5fr_10px_0px_6fr] gap-10 mb-10 relative md:ml-2 lg:ml-8 ipad:h-[700px] lg:h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              {HomePageGallary[0].filename ? (
                <ImageWithCaption
                  src={HomePageGallary[0].filename}
                  width={400}
                  height={533}
                  alt="Look 1"
                  className="object-cover md:min-w-[250px] md:min-h-[300px] w-full lg:min-w-[350px] 2xl:w-[1200px] "
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={400}
                  height={533}
                  sx={{ bgColor: "grey.900" }}
                />
              )}
            </div>
            <div>
              <p className="text-xl lg:text-lg text-left absolute bottom-0  xl:bottom-[1rem] 2xl:bottom-[5rem] left-0 mx-8  md:mx-0 md:max-w-[350px] lg:max-w-[400px] leading-relaxed">
                {blok.gallery_text_one}
              </p>
            </div>
            <div className="md:col-span-2">
              {HomePageGallary[1].filename ? (
                <ImageWithCaption
                  src={HomePageGallary[1].filename}
                  width={450}
                  height={600}
                  alt="Look 2"
                  className="object-cover w-full md:w-[400px] ipad:w-full md:h-[600px] lg:w-full lg:h-[700px] h-auto 2xl:w-[800px] 2xl:h-[800px] mb-40 md:mb-0"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={450}
                  height={600}
                  sx={{ bgColor: "grey.900" }}
                />
              )}
            </div>
          </motion.div>

          <div className="md:grid md:grid-cols-1 md:grid-rows-2 mb-10">
            <div className="md:col-span-2 space-y-4 md:row-span-2">
              <div className="flex justify-center gap-8">
                {HomePageGallary.filter((_, idx) => [2, 3].includes(idx)).map(
                  (item) => (
                    <ImageWithCaption
                      key={item.id}
                      src={item.filename}
                      width={500}
                      height={800}
                      alt={item.alt}
                      className="object-cover w-[500px] h-auto"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mb-10">
            {HomePageGallary[4].filename ? (
              <ImageWithCaption
                src={HomePageGallary[4].filename}
                width={1200}
                height={400}
                alt="Look 5"
                className="object-cover w-full h-[500px]"
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width={1200}
                height={400}
                sx={{ bgColor: "grey.900" }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] xl:grid-cols-[3fr_100px_30px_1fr] gap-10 mb-10 relative">
            <div className="md:col-span-2">
              {HomePageGallary[5].filename ? (
                <ImageWithCaption
                  src={HomePageGallary[5].filename}
                  width={450}
                  height={600}
                  alt="Look 6"
                  className="object-cover w-full h-auto 2xl:w-[900px] lg:h-[800px]"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={1200}
                  height={400}
                  sx={{ bgColor: "grey.900" }}
                />
              )}
            </div>
            <div>
              <p className="text-lg  md:mb-[-2px] text-left md:absolute bottom-0 xl:bottom-[9rem] right-0 mx-8  md:mx-0 md:max-w-[350px] lg:max-w-[400px] leading-relaxed">
                {blok.gallery_text_two}
              </p>
            </div>
            <div className="">
              {HomePageGallary[6].filename ? (
                <ImageWithCaption
                  src={HomePageGallary[6].filename}
                  width={400}
                  height={533}
                  alt="Look 7"
                  className="object-cover w-full h-auto md:min-w-[250px] md:min-h-[300px] lg:min-w-[350px] lg:min-h-[470px]"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={1200}
                  height={400}
                  sx={{ bgColor: "grey.900" }}
                />
              )}
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 md:grid-rows-2 mb-10">
            <div className="md:col-span-2 space-y-4 md:row-span-2">
              <div className="flex justify-center gap-8">
                {HomePageGallary.filter((_, idx) => [7, 8].includes(idx)).map(
                  (item) => (
                    <ImageWithCaption
                      key={item.id}
                      src={item.filename}
                      width={500}
                      height={800}
                      alt={item.alt}
                      className="object-cover w-[500px] h-[600px]"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
