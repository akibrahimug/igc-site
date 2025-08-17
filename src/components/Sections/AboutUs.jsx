"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import TitleAnimation from "@/components/ui/title-animation";

export default function AboutUs() {
  return (
    <section className="bg-black text-brown-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
              <TitleAnimation delay={0.2} duration={0.8} y={30}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-igc">
                  About IGC Fashion
                </h2>
              </TitleAnimation>
              <motion.div
                className="w-20 h-1 bg-brown-100"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Rooted in culture, centred on climate, and powered by community
                - IGC Fashion is more than just a fashion brand. We are a
                movement that celebrates African heritage while embracing
                sustainable practices for a better future.
              </p>

              <p>
                Founded in the heart of Uganda, our journey began with a simple
                yet powerful vision: to create fashion that tells stories,
                preserves traditions, and respects our planet. Every piece we
                create is a testament to the rich cultural tapestry of Africa,
                woven with threads of innovation and environmental
                consciousness.
              </p>

              <p>
                Our commitment to sustainability goes beyond materials - it's
                about building a community that values craftsmanship, supports
                local artisans, and creates opportunities for growth and
                development.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-brown-100 mb-2">5+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-brown-100 mb-2">
                  100+
                </div>
                <div className="text-sm text-gray-400">Artisans Supported</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-brown-100 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/portfolio">
                <Button className="bg-brown-100 text-black hover:bg-brown-200 transition-colors">
                  View Our Work
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-brown-100 text-brown-100 hover:bg-brown-100 hover:text-black transition-colors"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/images/igc-logo.PNG"
                    alt="IGC Fashion Studio"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-48 md:h-60 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/images/igc-logo-white.PNG"
                    alt="IGC Fashion Design"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  className="relative h-48 md:h-60 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/images/igc-logo-white 2.PNG"
                    alt="IGC Fashion Collection"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/images/igc-logo.PNG"
                    alt="IGC Fashion Workshop"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-brown-100 text-black px-6 py-3 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm font-semibold">Est. 2019</div>
              <div className="text-xs text-gray-600">Crafting Excellence</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Values Section */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center space-y-4"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-400">
              To create sustainable fashion that celebrates African culture
              while empowering communities and protecting our environment.
            </p>
          </motion.div>

          <motion.div
            className="text-center space-y-4"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-gray-400">
              To be the leading sustainable fashion brand in Africa, inspiring
              change through innovative design and cultural preservation.
            </p>
          </motion.div>

          <motion.div
            className="text-center space-y-4"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">Our Values</h3>
            <p className="text-gray-400">
              Sustainability, cultural preservation, community empowerment, and
              innovative design are the pillars that guide everything we do.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
