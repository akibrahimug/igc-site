"use client";
import React, { useState, useRef, useEffect } from "react";
import MegaMenu from "./MegaMenu";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const menuItems = [
    { title: "Home", id: "home", href: "/" },
    { title: "Events", id: "events" },
    { title: "Shop", id: "shop" },
    { title: "About us", id: "about_us" },
    { title: "Brand Principles", id: "brand_principles" },
    { title: "Portfolio", id: "portfolio" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setHoveredItem(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (itemId, e) => {
    clearTimeout(timeoutRef.current);
    setHoveredItem(itemId);
    setActiveMenu(itemId);
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({ top: rect.bottom, left: rect.left });
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuVisible(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setActiveMenu(null);
    }, 100); // Small delay to allow moving to the MegaMenu
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 " ref={menuRef}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <ul className="flex">
              {menuItems.map((item) => (
                <li key={item.id} className="relative">
                  <a
                    href={item.id === "home" ? item.href : "#"}
                    className={`text-brown-100 px-3 hover:bg-green-950 hover:text-brown-200 py-2 rounded-t-md text-sm font-medium transition-colors duration-200`}
                    onMouseEnter={(e) => handleMouseEnter(item.id, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                      if (item.id !== "home") {
                        setActiveMenu(activeMenu === item.id ? null : item.id);
                      }
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-green-950 bg-opacity-50 text-brown-100 placeholder-brown-200 px-3 py-1 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-brown-300"
            />
            <button className="bg-brown-100 text-green-950 px-4 py-2 rounded-md hover:bg-brown-300 transition-colors duration-200 shadow-md">
              Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brown-100 hover:text-brown-200 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
      </div>
      {activeMenu && activeMenu !== "home" && menuPosition && (
        <div
          onMouseEnter={() => {
            clearTimeout(timeoutRef.current);
            setIsMegaMenuVisible(true);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setIsMegaMenuVisible(false);
          }}
        >
          <MegaMenu
            menuId={activeMenu}
            onClose={() => {
              setActiveMenu(null);
              setIsMegaMenuVisible(false);
            }}
            position={menuPosition}
            isVisible={isMegaMenuVisible}
          />
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <MegaMenu
            menuId="home"
            isMobile={true}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
