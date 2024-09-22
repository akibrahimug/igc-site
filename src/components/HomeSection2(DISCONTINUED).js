"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { Carousel } from "@material-tailwind/react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const HomeSection = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const images = [
    "https://picsum.photos/600/600",
    "https://picsum.photos/600/600",
    "https://picsum.photos/600/600",
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="section bg-black-950 opacity-0  flex justify-center -mt-20 relative"
      >
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent to-black-950 z-10"></div>
        <div className="text-center z-20">
          <section className="w-full bg-black text-brown-200 mt-20 md:mt-0">
            <div className="container flex flex-col items-center gap-8 px-4 py-12 md:py-24 lg:py-32">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-igc ">
                  Elevate Your Style
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our latest fashion collection, designed to inspire
                  and empower.
                </p>
              </div>
              <button
                href="#"
                className=" mb-3 inline-flex text-brown-900 bg-brown-100 h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </button>
              <div className="lg:grid lg:grid-cols-3 gap-6 w-full hidden">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 lg:w-[300px] w-[250px] cursor-pointer  ${
                      hoveredIndex === null && index === 1
                        ? "sm:scale-110"
                        : hoveredIndex === index
                        ? "sm:scale-110"
                        : "sm:scale-100"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      src={image}
                      width={400}
                      height={300}
                      alt="Card Image"
                      className="h-[450px] w-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                        (hoveredIndex === null && index === 1) ||
                        hoveredIndex === index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <button
                        className={`bg-black/70 rounded-lg p-3 transition-all duration-300 ${
                          (hoveredIndex === null && index === 1) ||
                          hoveredIndex === index
                            ? "translate-y-0"
                            : "translate-y-4"
                        } bg-brown-100`}
                      >
                        <h3 className="text-2xl font-bold text-brown-900 font-igc">
                          Denim Jackets
                        </h3>
                        <p className="mt-2 text-brown-900/80">
                          All these denim jackets are made with 100% recycled
                          materials.
                        </p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* <Carousel
                className="rounded-xl lg:hidden"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
                prevArrow={({ handlePrev }) => (
                  <button
                    onClick={handlePrev}
                    className="absolute top-2/4 -left-4 -translate-y-2/4 bg-brown-100 rounded-full p-2  text-black-950"
                  >
                    <FaArrowLeft />
                  </button>
                )}
                nextArrow={({ handleNext }) => (
                  <button
                    onClick={handleNext}
                    className="absolute top-2/4 -right-4 -translate-y-2/4 bg-brown-100 rounded-full p-2 text-black-950"
                  >
                    <FaArrowRight />
                  </button>
                )}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full px-4">
                    <div
                      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 w-full cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Image
                        src={image}
                        width={400}
                        height={300}
                        alt="Card Image"
                        className="h-[450px] w-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
                      <div
                        className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                          hoveredIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <button
                          className={`bg-black/70 rounded-lg p-3 transition-all duration-300 ${
                            hoveredIndex === index
                              ? "translate-y-0"
                              : "translate-y-4"
                          } bg-black-900`}
                        >
                          <h3 className="text-2xl font-bold text-white">
                            Denim Jackets
                          </h3>
                          <p className="mt-2 text-white/80">
                            All these denim jackets are made with 100% recycled
                            materials.
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel> */}
            </div>
          </section>
        </div>
      </section>
      <section className="bg-black-950 w-full">
        <div className="md:grid md:grid-cols-[5fr_3fr] gap-6 grid-flow-col max-w-[2000px] mx-auto">
          <div className="text-brown-200 mx-10 ">
            <h2 className="md:text-7xl text-4xl font-bold font-igc p-2  border-8 border-brown-900 rounded-lg mb-10">
              <div className="border-2 md:p-4 p-3 border-brown-900">
                Our Collections
              </div>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-end ">
              <p>
                This is a featured product with a description. This is a
                featured product with a description. This is a featured product
                with a description. This is a featured product with a
                description. This is a featured product with a description. This
                is a featured product with a description. This is a featured
                product with a description. This is a featured product with a
                description.
              </p>
              <p>
                This is a featured product with a description. This is a
                featured product with a description. This is a featured product
                with a description. This is a featured product with a
                description. This is a featured product with a description. This
                is a featured product with a description. This is a featured
                product with a description. This is a featured product with a
                description.
              </p>
            </div>
          </div>
          <div className="mx-10 md:mx-0 md:mr-10 mt-10 md:mt-0 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
            <Image
              src="https://picsum.photos/600/900"
              width={600}
              height={900}
              alt="Collection"
              className="relative z-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
