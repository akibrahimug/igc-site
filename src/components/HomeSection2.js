"use client";
import React, { useEffect, useRef } from "react";

const HomeSection = () => {
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
      className="section bg-black-950 opacity-0 min-h-screen flex items-center justify-center -mt-20 relative"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent to-black-950 z-10"></div>
      <div className="text-center z-20">
        <h2 className="text-4xl md:text-6xl font-bold text-brown-100 mb-4">
          Welcome to the Second Section
        </h2>
        <p className="text-xl md:text-2xl text-brown-200">
          This section will be discussed in our next meeting.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
