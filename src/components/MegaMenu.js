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
          title: 'Quick links',
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
    portfolio: {
      title: "PORTFOLIO / COLLECTIONS & COMMISSIONED PROJECTS",
      columns: [
        {
          title: "Projects",
          items: [
            {
              name: "Gugumuka 2024 - egypt, senegal, london ?",
              href: "/portfolio/gugumuka-2024",
            },
            { name: "Ndere centre event", href: "/portfolio/ndere-centre" },
            {
              name: "Floor Moves to Slow Fashion - Olympics",
              href: "/portfolio/floor-moves",
            },
            {
              name: "Clothed with protection",
              href: "/portfolio/clothed-with-protection",
            },
            { name: "We are going to mars", href: "/portfolio/mars" },
            { name: "Mistaken fabrics", href: "/portfolio/mistaken-fabrics" },
            { name: "Musiko", href: "/portfolio/musiko" },
            {
              name: "Kampala Fashion week?",
              href: "/portfolio/kampala-fashion-week",
            },
          ],
          image: {
            src: "https://picsum.photos/600/400",
            alt: "Events Image",
          },
        },
      ],
    },
  };

  const content = menuContent[menuId];

  const [email, setEmail] = useState("");

  if (!content) return null;

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    console.log("Newsletter signup:", email);
    // Reset the email input
    setEmail("");
    // Optionally, show a success message to the user
  };

  return (
    <div
      className={`${
        isMobile
          ? "fixed inset-x-0 top-0 bg-brown-100 z-50 overflow-y-auto max-h-screen"
          : `absolute bg-green-950 shadow-lg z-20 rounded-b-2xl megaMenuFadeIn ${
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
        {isMobile ? (
          <div className="flex flex-col">
            <button
              onClick={onClose}
              className="text-green-950 hover:text-green-800 self-end mb-4"
            >
              <FaTimes className="h-6 w-6" />
            </button>
            <div className="px-4">
              <h3 className="text-lg font-semibold mb-4 text-green-950">
                Quick links
              </h3>
              <ul className="space-y-2">
                {menuContent.home.columns
                  .find((col) => col.title === "Quick links")
                  .items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block pb-2 rounded transition-colors duration-200 text-sm font-light text-green-950 hover:text-green-800"
                        onClick={onClose}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex">
            <div
              className={`grid ${
                content.columns.length < 5 && content.columns.length === 3
                  ? "grid-cols-3"
                  : content.columns.length < 3
                  ? "grid-cols-2"
                  : "grid-cols-4"
              } gap-4`}
            >
              {content.columns.map((column, index) => (
                <div
                  key={index}
                  className={`${
                    column.title === "Quick links"
                      ? "bg-brown-100 p-4 rounded-lg"
                      : ""
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      column.title === "Quick links"
                        ? "text-green-950"
                        : "text-brown-100"
                    }`}
                  >
                    {column.title}
                  </h3>
                  {column.newsletter ? (
                    <div className="newsletter-signup">
                      <p className="text-brown-100 mb-2">
                        Sign up for our newsletter:
                      </p>
                      <form onSubmit={handleNewsletterSignup} className="flex">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-brown-100 text-green-950 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brown-300 w-full"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-brown-200 text-green-950 px-4 py-2 rounded-r-md hover:bg-brown-300 transition-colors duration-200"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {column.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.href}
                            className={`block pb-2 rounded transition-colors duration-200 text-sm font-light ${
                              column.title === "Quick links"
                                ? "text-green-950  hover:text-green-800"
                                : "text-brown-300  hover:text-brown-100"
                            }`}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {content.columns.length < 5 && content.image && (
              <div className="ml-4">
                <div className="rounded-lg overflow-hidden h-[200px] w-[240px]">
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    width={240}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
