"use client";
// TODO: Refactor this component to FIX the issue with the navigation links not being displayed correctly (Rearrange the items)
import React, { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const Navigation = ({ navigation = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setIsPageScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function parseValue(str) {
    const cleaned = str
      .trim()
      // strip JS comments
      .replace(/\/\/.*$/gm, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // remove "export default ..." or "const x ="
      .replace(/^(?:export\s+default\s+)?(?:const|let|var)\s+\w+\s*=\s*/i, "")
      // strip trailing semicolons
      .replace(/;+\s*$/, "")
      // remove trailing commas before } or ]
      .replace(/,\s*([\]}])/g, "$1")
      // quote unquoted object keys
      .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":');

    return JSON.parse(cleaned);
  }

  const navigationLinks = navigation.data.datasource_entries.reduce(
    (acc, item) => {
      try {
        acc[item.name] = parseValue(item.value);
      } catch (e) {
        console.error(`Error parsing value for "${item.name}":`, e);
        acc[item.name] = [];
      }
      return acc;
    },
    {}
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed left-0 right-0 z-50  transition-all duration-300",
        scrolled
          ? "bg-black h-[6rem]"
          : "bg-gradient-to-b from-black-700 to-transparent h-[10rem]"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link href="/">
            <Image
              className="h-12 w-auto md:h-[55px]"
              src="/images/igc-logo-white.PNG"
              alt="igc-logo"
              width={100}
              height={100}
            />
          </Link>
        </motion.div>
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "block text-brown-100 hover:text-zinc-300",
                  isOpen && "hidden",
                  "w-16 h-16 flex items-center justify-center"
                )}
              >
                <MenuIcon className="size-10 md:size-10" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black border-l-0 text-brown-100">
              <div className="h-full flex flex-col mt-8">
                <div className="flex flex-col space-y-6 w-full">
                  <div className="flex flex-col space-y-2 md:px-6">
                    {navigationLinks?.navigation?.map((item, idx) => (
                      <MenuItem
                        key={idx}
                        item={item}
                        onClose={() => setIsOpen(false)}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

const MenuItem = ({ item, onClose, index = 0 }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {item.submenu ? (
        <>
          <button
            onClick={() => setSubMenuOpen(!subMenuOpen)}
            className={cn(
              "flex flex-row items-center p-2 rounded-lg w-full justify-between hover:opacity-70"
            )}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="flex tracking-wider font-bebas-neue text-2xl">
                {item.title}
              </span>
            </div>
            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
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
                    onClick={onClose}
                    className={subItem.path === pathname ? "font-bold" : ""}
                  >
                    <span className="font-bebas-neue text-xl tracking-wider hover:opacity-70">
                      {subItem.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          onClick={onClose}
          className={cn(
            "flex flex-row space-x-4 items-center p-2 rounded-lg hover:opacity-70",
            item.path === pathname && "bg-opacity-20"
          )}
        >
          {item.icon}
          <span className="tracking-wider font-bebas-neue text-2xl flex">
            {item.title}
          </span>
        </Link>
      )}
    </motion.div>
  );
};
