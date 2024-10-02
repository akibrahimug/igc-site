"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const MegaMenu = ({
  menuId,
  onClose,
  isMobile = false,
  position,
  isVisible,
}) => {
  const menuContent = {
    home: {
      title: "HOME",
      columns: [
        {
          title: "",
          items: [
            { name: "Home", href: "/" },
            { name: "Events", href: "/events" },
            { name: "Shop", href: "/shop" },
            { name: "About us", href: "/about-us" },
            { name: "Brand Principles", href: "/brand-principles" },
            { name: "Portfolio", href: "/portfolio" },
          ],
        },
      ],
    },
  };

  const content = menuContent[menuId];

  const [email, setEmail] = useState("");

  if (!content) return null;

  return (
    <div
      className={`${
        isMobile
          ? "fixed inset-x-0 top-0 bg-brown-100 z-50 overflow-y-auto max-h-screen"
          : `absolute bg-black-950 shadow-lg z-20 rounded-b-2xl megaMenuFadeIn ${
              isVisible ? "visible" : ""
            }`
      }`}
      style={
        !isMobile
          ? {
              top: `${position.top}px`,
              left: `${position.left}px`,
              width: "auto",
              maxWidth: "800px",
            }
          : {}
      }
    >
      <div className={`container mx-auto ${isMobile ? "py-4" : "py-8"}`}>
        <div className="flex flex-col">
          <button
            onClick={onClose}
            className="text-black-950 hover:text-black-800 self-end mb-4"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          <div className="px-4">
            {/* <h3 className="text-lg font-semibold mb-4 text-black-950">
                Quick links
              </h3> */}
            <ul className="space-y-2">
              {menuContent.home.columns
                .find((col) => col.title === "")
                .items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block pb-2 rounded transition-colors duration-200 text-sm md:text-[20px]  
                        font-light text-black-800 hover:text-black-950 hover:font-[700]  active:text-black-950 active:underline"
                      onClick={onClose}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
