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
          ]
        }
      ]
    },
    events: {
      title: "UPCOMING EVENTS / NEWSLETTER",
      columns: [
        {
          title: "Newsletter Signup",
          items: [],
          newsletter: true,
        },
        {
          title: "Upcoming Events",
          items: [
            {
              name: "Coming soon - check back for updates",
              href: "/events",
            },
          ],
        },
      ],
      image: {
        src: "https://picsum.photos/600/400",
        alt: "Events Image",
      },
    },
    shop: {
      title: "Shop",
      columns: [
        {
          title: "Ready to wear",
          items: [
            { name: "Men", href: "/pages/marketing/men" },
            { name: "Women", href: "/pages/marketing/women" },
            { name: "Unisex", href: "/pages/marketing/unisex" },
          ],
        },
        {
          title: "Costumes",
          items: [
            { name: "Back cloth", href: "/pages/travel/landing" },
            { name: "Second hand fabrics", href: "/pages/travel/tours" },
            { name: "Recycled fabrics", href: "/pages/travel/tour" },
            { name: "Mix and match", href: "/pages/travel/checkout" },
            {
              name: "Miscellaneous",
              href: "/pages/travel/order-completed",
            },
            { name: "Designs principles", href: "/pages/travel/blog" },
            { name: "Costume stories", href: "/pages/travel/blog-post" },
          ],
        },
        {
          title: "Curation",
          items: [{ name: "Fashion showcase", href: "/pages/career/landing" }],
        },
      ],
      image: {
        src: "https://picsum.photos/300/200",
        alt: "Menu Image",
      },
    },
    about_us: {
      title: "About us",
      columns: [
        {
          title: "Our story",
          items: [
            {
              name: "Background",
              href: "/docs/getting-started/installation",
            },
            { name: "Inspirations", href: "/docs/getting-started/basic-usage" },
            {
              name: "Mission",
              href: "/docs/getting-started/customization",
            },
          ],
        },
        {
          title: "Meet the team",
          items: [
            { name: "Our founders", href: "/docs/components/ui" },
            { name: "Tutors", href: "/docs/components/ui" },
            { name: "Tailors", href: "/docs/components/layout" },
            { name: "Community leaders", href: "/docs/components/icons" },
            { name: "Volunteers", href: "/docs/components/icons" },
            { name: "Supporters", href: "/docs/components/icons" },
          ],
        },
      ],
      image: {
        src: "https://picsum.photos/300/200",
        alt: "Menu Image",
      },
    },
    brand_principles: {
      title: "IGC BRAND / PRINCIPLES",
      columns: [
        {
          title: "Environment",
          items: [
            {
              name: "Climate change, fashion pollution and Uganda",
              href: "/environment/climate-change",
            },
            {
              name: "What does IGC do about it? Materials - natural",
              href: "/environment/materials",
            },
            {
              name: "Intro and Link to Kwetu Kwanza",
              href: "/environment/kwetu-kwanza",
            },
          ],
        },
        {
          title: "Culture",
          items: [
            {
              name: "Indigenous materials: Barkcloth, Nsimbi, Buso & Matembe",
              href: "/culture/materials",
            },
            {
              name: "Cultural context: Barkcloth history / Buganda Kingdom",
              href: "/culture/history",
            },
            { name: "Link to Ndere Centre", href: "/culture/ndere-centre" },
          ],
        },
        {
          title: "Community / Society",
          items: [
            {
              name: "I G Community - the fashion cypher background",
              href: "/community/fashion-cypher",
            },
            {
              name: "Fashion cypher programme link",
              href: "/community/fashion-cypher-programme",
            },
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
