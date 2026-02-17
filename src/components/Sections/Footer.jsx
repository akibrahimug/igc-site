"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// TODO: Change the navigation items - IMPLEMENTED
// Plug into storyblok datasource for dynamic content
export default function Footer({ datasource }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  // 1) Helper to parse each value string into JSON:
  function parseValue(str) {
    if (typeof str !== "string") return str ?? [];
    const raw = str.trim();
    if (!raw) return [];

    try {
      return JSON.parse(raw);
    } catch {
      const cleaned = raw
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(
          /^(?:export\s+default\s+)?(?:const|let|var)\s+\w+\s*=\s*/i,
          "",
        )
        .replace(/;+\s*$/, "")
        .replace(/,\s*([\]}])/g, "$1")
        .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":');

      return JSON.parse(cleaned);
    }
  }

  const data = datasource.data.datasource_entries.reduce((acc, item) => {
    let parsedArray;
    try {
      parsedArray = parseValue(item.value);
    } catch (error) {
      console.error(`Error parsing value for "${item.name}":`, error);
      // Fallback to an empty array if parsing fails
      parsedArray = [];
    }

    acc[item.name] = parsedArray;
    return acc;
  }, {});
  const companyLinks = Array.isArray(data.company) ? data.company : [];

  return (
    <footer className="bg-black text-brown-100 text-[14px]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">IGC FASHION</h2>
            <p className="  text-gray-400 max-w-xs leading-relaxed">
              Rooted in culture. Centred on climate. Powered by community.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/igc_fashion"
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/igcfashion"
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.youtube.com/@igcfashionuganda4180"
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://linkedin.com/company/igcfashion"
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://tiktok.com/@igcfashionug"
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h6 className="text-md font-medium uppercase tracking-wider">
              Company
            </h6>
            <ul className="space-y-2">
              {companyLinks.map((item, id) => (
                <li key={id}>
                  <Link
                    href={item.href}
                    className=" text-gray-400 max-w-xs leading-relaxed hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <Link
              href={"mailto:igcommunityfashion@gmail.com"}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-brown-100 font-medium tracking-wider border-2 border-brown-100 bg-transparent hover:bg-brown-100 hover:text-black transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brown-100 focus:ring-offset-2 focus:ring-offset-black"
              prefetch={false}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-brown-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </Link>
            <h6 className="text-md font-medium uppercase tracking-wide">
              Address
            </h6>
            <p className="  text-gray-400 max-w-xs leading-relaxed">
              <strong>Studio:</strong> Nyabinghi street, Kazo, Kampala, Uganda{" "}
              <br />
              <br />
              <strong>Office & Shop:</strong> 36 Kyadondo road, Kampala, Uganda
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} IGC FASHION AFRICA. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
