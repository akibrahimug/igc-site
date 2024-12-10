"use client";
import React, { useEffect, useRef } from "react";

const NewsSection = () => {
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

  const files = [
    {
      title: "A TALE OF LABEL ADVENTURE OF UNTAMED",
      size: "3.9 MB",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
      title: "A TALE OF LABEL ADVENTURE OF UNTAMED",
      size: "3.9 MB",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
      title: "A TALE OF LABEL ADVENTURE OF UNTAMED",
      size: "3.9 MB",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    // More files...
  ];
  return (
    <section
      ref={sectionRef}
      className="section bg-black opacity-0 min-h-screen flex justify-center -mt-20 relative"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent to-black-950 z-10"></div>
      <div className="text-center z-20">
        <div className="container mx-auto mt-24">
          <h1 className="text-4xl font-bold mb-6 text-center text-brown-200">
            IGC NEWS
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 m-2"
          >
            {files.map((file) => (
              <li key={file.source} className="relative">
                <div className=" block w-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100  hover:scale-[1.01] transition-all duration-300">
                  <img
                    src={file.source}
                    alt=""
                    className="pointer-events-none object-cover w-full h-full"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button>
                </div>
                <div className="m-6">
                  <h3 className="pointer-events-none mt-4 block truncate text-lg font-medium text-gray-200 text-left">
                    {file.title}
                  </h3>
                  <p className="pointer-events-none block text-sm font-medium text-gray-400 text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque dolorem earum commodi sunt error id sapiente
                    consectetur, quam perspiciatis quasi odit rerum ipsa
                    corporis, deleniti labore, corrupti doloribus maiores illum!
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

export default NewsSection;
