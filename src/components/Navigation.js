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
  ],
    },
    {
      title: 'FASHION CYPHER',
      submenu: true,
      subMenuItems: [
        { title: 'Workshops', path: '/fashion-cypher/workshops' },
        { title: 'Kazo', path: '/fashion-cypher/kazo' },
        { title: 'Gugumuka Mu Kazo', path: '/fashion-cypher/gugumuka' },
        { title: 'Networking', path: '/fashion-cypher/networking' },
      ],
    },
    {
      title: 'KWETU KWANZA',
      path: '/kwetu-kwanza',
    },
    {
      title: 'EVENTS',
      path: '/events',
    },
    {
      title: 'PRESS',
      path: '/press',
    },
    {
      title: 'ABOUT US',
      path: '/about',
    },
    {
      title: 'CONTACT US',
      path: '/contact',
    },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 " ref={menuRef}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
					<div className="md:block">
            <p className="text-3xl font-bold">Logo</p>
          </div>
					<div className="flex md:flex items-center">
						<Sheet>
							<SheetTrigger asChild>
								<Button><MenuIcon  className="h-12 w-12" aria-hidden="true" /></Button>
							</SheetTrigger>
							<SheetContent>
								<div className="h-screen flex-1  flex md:flex w-full">
									<div className="flex flex-col space-y-6 w-full">
										<div className="flex flex-col space-y-2 md:px-6 ">
											{SIDENAV_ITEMS.map((item, idx) => {
												return <MenuItem key={idx} item={item} />;
											})}
          </div>
        </div>
      </div>
							</SheetContent>
						</Sheet>
					</div>
        </div>
        </div>
    </nav>
  );
};

export default Navigation;

const MenuItem = ({ item }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:opacity-50 ${
              pathname.includes(item.path) ? 'bg-opacity-50' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl  flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <ChevronDown width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-opacity-20 ${
            item.path === pathname ? 'bg-opacity-20' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};