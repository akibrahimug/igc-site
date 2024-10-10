"use client";
import React, { useState, useRef, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const SIDENAV_ITEMS= [
    {
      title: 'HOME',
      path: '/',
    },
    {
      title: 'BRAND PRINCIPLES',
      submenu: true,
      subMenuItems: [
        { title: 'Environment', path: '/brand-principles/environment' },
        { title: 'Culture', path: '/brand-principles/web-design/culture' },
        { title: 'Community', path: '/brand-principles/community' },
      ],
    },
    {
      title: 'SERVICES',
      path: '/services',
    },
    {
      title: 'PORTFOLIO',
      path: '/portfolio',
    },
    {
      title: 'SHOP',
      submenu: true,
      subMenuItems: [
        { title: 'Shop all', path: '/shop/account' },
        { title: 'Shipping and Returns', path: '/shop/privacy' },
        { title: 'Size Guide', path: '/shop/size-guide' },
        { title: 'Terms and Conditions', path: '/shop/terms and conditions' },
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
<nav className="absolute top-0 left-0 right-0 z-10 mt-8">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between h-16">
          <div className="pl-0 ml-0">
            <img className="h-12 w-auto md:h-24" src="/images/igc-logo.PNG" alt="igc-logo" />
          </div>
          <div className="pr-0 mr-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <MenuIcon className="size-12" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="h-full flex flex-col mt-8">
                  <div className="flex flex-col space-y-6 w-full">
                    <div className="flex flex-col space-y-2 md:px-6">
                      {SIDENAV_ITEMS.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
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