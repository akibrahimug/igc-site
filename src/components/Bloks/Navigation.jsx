"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { Search, User, ShoppingBag, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const TRANSITION_MS = 250;
const DESKTOP_BREAKPOINT = 1024;
const NAV_BAR_HEIGHT_PX = 72;
const DESKTOP_MENU_TEXT_CLASS =
  "font-bebas-neue text-base tracking-widest uppercase";
const DESKTOP_SUBLINK_TEXT_CLASS =
  "font-bebas-neue text-sm tracking-widest uppercase";
const MOBILE_DRAWER_TRANSITION = {
  duration: 0.18,
  ease: [0.25, 0.8, 0.25, 1],
};
const SHOPIFY_STORE_URL = "https://igc-fashion-2.myshopify.com/";
const MOBILE_MENU_TITLE_CLASS =
  "text-white leading-[0.98] uppercase tracking-wide font-bebas-neue text-[1.6rem]";
const MOBILE_MENU_SUBLINK_CLASS =
  "block text-white/95 hover:text-white leading-[1.05] uppercase tracking-wide font-bebas-neue text-[1.05rem]";

const hasClickablePath = (path) =>
  typeof path === "string" && path.trim() !== "" && path !== "#";
const isExternalPath = (path) =>
  typeof path === "string" && /^(https?:)?\/\//i.test(path);

const MobileHamburgerIcon = () => (
  <span aria-hidden="true" className="flex flex-col items-center gap-[0.22rem]">
    <span className="block h-px w-[1rem] bg-white/90" />
    <span className="block h-px w-[1rem] bg-white/90" />
  </span>
);

const Navigation = ({ navigation = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setIsPageScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [visibleCount, setVisibleCount] = useState(Infinity);
  const panelRef = useRef(null);
  const navLinksRef = useRef(null);
  const navMeasureRef = useRef(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const pathname = usePathname();

  const isShopPage = pathname?.startsWith("/shop");

  const handleScroll = useCallback(() => {
    setIsPageScrolled(window.scrollY > 150);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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

  const navigationLinks = useMemo(
    () =>
      navigation.data.datasource_entries.reduce((acc, item) => {
        try {
          acc[item.name] = parseValue(item.value);
        } catch (e) {
          console.error(`Error parsing value for "${item.name}":`, e);
          acc[item.name] = [];
        }
        return acc;
      }, {}),
    [navigation],
  );

  const allItems = useMemo(() => {
    const navItems = Array.isArray(navigationLinks?.navigation)
      ? navigationLinks.navigation
      : [];

    const shopItem = {
      title: "SHOP",
      path: SHOPIFY_STORE_URL,
      submenu: false,
      subMenuItems: [],
    };

    if (navItems.length === 0) return [shopItem];

    const existingShopIndex = navItems.findIndex(
      (item) => item?.title?.toUpperCase() === "SHOP",
    );

    if (existingShopIndex >= 0) {
      return navItems.map((item, idx) =>
        idx === existingShopIndex
          ? {
              ...item,
              path: SHOPIFY_STORE_URL,
              submenu: false,
              subMenuItems: [],
            }
          : item,
      );
    }

    const insertAfterIndex = navItems.findIndex(
      (item) => item?.title?.toUpperCase() === "PORTFOLIO",
    );
    const withShop = [...navItems];
    if (insertAfterIndex >= 0) {
      withShop.splice(insertAfterIndex + 1, 0, shopItem);
    } else {
      withShop.push(shopItem);
    }
    return withShop;
  }, [navigationLinks]);
  const regularItems = allItems.filter(
    (item) => item.title?.toUpperCase() !== "MORE",
  );

  // Collapse items into MORE by measuring horizontal fit in a single row.
  const [measureVersion, setMeasureVersion] = useState(0);

  const startMeasure = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < DESKTOP_BREAKPOINT) {
      setVisibleCount(0);
      return;
    }
    setMeasureVersion((prev) => prev + 1);
  }, []);

  // Measure visible capacity using a hidden row with all regular labels.
  useEffect(() => {
    if (measureVersion === 0) return;

    const frameId = requestAnimationFrame(() => {
      const navEl = navLinksRef.current;
      const measureEl = navMeasureRef.current;
      if (!navEl || !measureEl) {
        return;
      }

      const regularTrack = measureEl.querySelector("[data-measure-regular]");
      if (!regularTrack) {
        return;
      }

      const itemNodes = Array.from(
        regularTrack.querySelectorAll("[data-measure-item]"),
      );
      if (itemNodes.length === 0) {
        setVisibleCount(Infinity);
        return;
      }

      const availableWidth = navEl.clientWidth;
      const styles = getComputedStyle(regularTrack);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const regularTotalWidth = regularTrack.scrollWidth;
      const moreNode = measureEl.querySelector("[data-measure-more]");
      const moreWidth = moreNode ? moreNode.getBoundingClientRect().width : 0;
      const EPSILON = 0.5;

      // No overflow: show all regular items and no dynamic MORE.
      if (regularTotalWidth <= availableWidth + EPSILON) {
        setVisibleCount(Infinity);
        return;
      }

      let maxVisible = 0;
      const firstLeft = itemNodes[0].offsetLeft;
      for (let idx = 0; idx < itemNodes.length; idx++) {
        const item = itemNodes[idx];
        const prefixWidth = item.offsetLeft - firstLeft + item.offsetWidth;
        const gapsBetweenItems = idx;
        const widthWithDynamicMore =
          prefixWidth + gapsBetweenItems * gap + gap + moreWidth;

        if (widthWithDynamicMore <= availableWidth + EPSILON) {
          maxVisible = idx + 1;
          continue;
        }
        break;
      }

      setVisibleCount(Math.max(maxVisible, 1));
    });

    return () => cancelAnimationFrame(frameId);
  }, [measureVersion, regularItems.length]);

  useEffect(() => {
    startMeasure();
    window.addEventListener("resize", startMeasure);
    return () => window.removeEventListener("resize", startMeasure);
  }, [startMeasure]);

  // Re-measure when nav items and route/layout conditions change.
  useEffect(() => {
    startMeasure();
  }, [startMeasure, allItems, pathname, isShopPage]);

  // Observe container width changes that aren't tied to window resize.
  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const el = navLinksRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      startMeasure();
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [startMeasure, allItems]);

  // Re-measure after font swaps, which can change nav item widths.
  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts) return;
    const fontSet = document.fonts;
    let cancelled = false;

    fontSet.ready.then(() => {
      if (!cancelled) {
        startMeasure();
      }
    });

    const handleLoadingDone = () => startMeasure();
    if (typeof fontSet.addEventListener === "function") {
      fontSet.addEventListener("loadingdone", handleLoadingDone);
    }

    return () => {
      cancelled = true;
      if (typeof fontSet.removeEventListener === "function") {
        fontSet.removeEventListener("loadingdone", handleLoadingDone);
      }
    };
  }, [startMeasure]);

  const { inlineItems, overflowItems } = useMemo(() => {
    if (visibleCount >= regularItems.length) {
      return { inlineItems: regularItems, overflowItems: [] };
    }
    return {
      inlineItems: regularItems.slice(0, visibleCount),
      overflowItems: regularItems.slice(visibleCount),
    };
  }, [regularItems, visibleCount]);

  const moreDropdownItems = useMemo(() => {
    return overflowItems;
  }, [overflowItems]);

  // Resolve panel items
  const panelItems = useMemo(() => {
    if (activePanel === "more" && visibleCount < regularItems.length) {
      return moreDropdownItems;
    }
    if (typeof activePanel === "number" && inlineItems[activePanel]) {
      const item = inlineItems[activePanel];
      if (item.submenu && item.subMenuItems?.length > 0) {
        return item.subMenuItems.map((sub) => ({
          title: sub.title,
          path: sub.path,
          submenu: false,
        }));
      }
    }
    return [];
  }, [
    activePanel,
    inlineItems,
    moreDropdownItems,
    visibleCount,
    regularItems.length,
  ]);

  // Close dynamic MORE panel when overflow disappears after re-measure.
  useEffect(() => {
    if (activePanel === "more" && visibleCount >= regularItems.length) {
      setActivePanel(null);
    }
  }, [activePanel, visibleCount, regularItems.length]);

  // Measure panel content height whenever items change
  useEffect(() => {
    if (panelItems.length > 0 && panelRef.current) {
      setPanelHeight(panelRef.current.scrollHeight);
    } else {
      setPanelHeight(0);
    }
  }, [panelItems]);

  const showBg = scrolled || panelHeight > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 right-0 z-50"
      onMouseLeave={() => setActivePanel(null)}
    >
      {/* Single background that covers nav + panel, transitions as one block */}
      <div
        className="absolute top-0 left-0 right-0 bg-black pointer-events-none"
        style={{
          height: showBg ? `${NAV_BAR_HEIGHT_PX + panelHeight}px` : "0px",
          transition: `height ${TRANSITION_MS}ms linear`,
        }}
      />

      {/* Main nav bar */}
      <nav className="relative h-[4.5rem]">
        <div
          data-nav-row
          className="container mx-auto px-4 md:px-8 grid grid-cols-2 items-center h-full"
        >
          {/* Col 1: Nav links (desktop) + hamburger (mobile) — never exceeds 50% */}
          <div className="relative flex items-center h-full min-w-0 overflow-hidden">
            {/* Desktop Navigation Links — single row; overflow goes to MORE */}
            <div
              ref={navLinksRef}
              className="hidden lg:flex flex-nowrap items-center gap-6 flex-1 min-w-0 h-full overflow-hidden"
            >
              {inlineItems.map((item, idx) => (
                <DesktopNavItem
                  key={idx}
                  item={item}
                  onHover={() =>
                    item.submenu ? setActivePanel(idx) : setActivePanel(null)
                  }
                />
              ))}

              {moreDropdownItems.length > 0 &&
                visibleCount < regularItems.length && (
                  <button
                    data-more-btn
                    className={cn(
                      "shrink-0 text-white hover:opacity-70 whitespace-nowrap",
                      DESKTOP_MENU_TEXT_CLASS,
                    )}
                    onMouseEnter={() => setActivePanel("more")}
                    onClick={() =>
                      setActivePanel(activePanel === "more" ? null : "more")
                    }
                  >
                    MORE
                  </button>
                )}
            </div>
            <div
              ref={navMeasureRef}
              aria-hidden="true"
              className="hidden lg:block absolute left-0 top-0 h-0 overflow-hidden pointer-events-none invisible"
              style={{ width: "max-content" }}
            >
              <div
                data-measure-regular
                className="flex flex-nowrap items-center gap-6 w-max"
              >
                {regularItems.map((item, idx) => (
                  <span
                    key={`measure-${item.title || idx}-${idx}`}
                    data-measure-item
                    className={cn(
                      "shrink-0 whitespace-nowrap",
                      DESKTOP_MENU_TEXT_CLASS,
                    )}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
              <span
                data-measure-more
                className={cn(
                  "shrink-0 whitespace-nowrap",
                  DESKTOP_MENU_TEXT_CLASS,
                )}
              >
                MORE
              </span>
            </div>

            {/* Mobile hamburger menu */}
            <div className="lg:hidden">
              {!isOpen && (
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="w-12 h-12 flex items-center justify-center hover:opacity-80"
                  aria-label="Open menu"
                >
                  <MobileHamburgerIcon />
                </button>
              )}
            </div>

            {/* Shop icons (only on shop pages) */}
            {isShopPage && (
              <div className="hidden lg:flex items-center gap-5 ml-auto">
                <button className="text-white hover:text-zinc-300">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-zinc-300">
                  <User className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-zinc-300">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Col 2: Logo — fixed size */}
          <div className="flex items-center h-full">
            <Link href="/">
              <Image
                className="h-10 w-auto md:h-12"
                src="/images/igc-logo-white.PNG"
                alt="igc-logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[80]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-transparent"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: "linear" }}
            />

            <div className="absolute inset-0 pointer-events-none">
              <motion.aside
                className="pointer-events-auto relative h-full w-[78vw] max-w-[30rem] min-w-[18rem] bg-black overflow-y-auto"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={MOBILE_DRAWER_TRANSITION}
              >
                <div className="flex items-center justify-start px-5 pt-4 pb-5">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="h-14 w-14 rounded-full border border-transparent text-white flex items-center justify-center hover:border-white/80 hover:opacity-80 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="size-7" />
                  </button>
                </div>

                <div className="px-6 pb-12">
                  {regularItems.map((item, idx) => (
                    <MobileNavEntry
                      key={`${item.title || idx}-${idx}`}
                      item={item}
                      onClose={() => setIsOpen(false)}
                      index={idx}
                    />
                  ))}
                </div>
              </motion.aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel */}
      <div
        className="hidden lg:block relative overflow-hidden"
        style={{
          height: panelItems.length > 0 ? `${panelHeight}px` : "0px",
          transition: `height ${TRANSITION_MS}ms linear`,
        }}
      >
        <div ref={panelRef} className="container mx-auto px-4 md:px-8 pb-3">
          {panelItems.map((item, idx) => (
            isExternalPath(item.path) ? (
              <a
                key={idx}
                href={item.path}
                className={cn(
                  "block py-2 text-white hover:opacity-70",
                  DESKTOP_SUBLINK_TEXT_CLASS,
                )}
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.path}
                className={cn(
                  "block py-2 text-white hover:opacity-70",
                  DESKTOP_SUBLINK_TEXT_CLASS,
                  item.path === pathname && "opacity-70",
                )}
              >
                {item.title}
              </Link>
            )
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;

/* ─── Desktop Nav Item (inline in the bar) ─── */
const DesktopNavItem = ({ item, onHover }) => {
  const pathname = usePathname();
  const hasSublinks = item.submenu && item.subMenuItems?.length > 0;
  const isExternal = isExternalPath(item.path);
  const itemClasses = cn(
    "shrink-0 whitespace-nowrap",
    DESKTOP_MENU_TEXT_CLASS,
    hasSublinks
      ? "text-white hover:opacity-70"
      : "text-white/40 hover:text-white/70",
    !isExternal &&
      item.path === pathname &&
      (hasSublinks ? "opacity-70" : "text-white/70"),
  );

  if (hasSublinks) {
    return (
      <button
        type="button"
        onMouseEnter={onHover}
        onFocus={onHover}
        className={itemClasses}
        aria-haspopup="true"
      >
        {item.title}
      </button>
    );
  }

  if (isExternal) {
    return (
      <a href={item.path} onMouseEnter={onHover} className={itemClasses}>
        {item.title}
      </a>
    );
  }

  return (
    <Link
      href={item.path || "#"}
      onMouseEnter={onHover}
      className={itemClasses}
    >
      {item.title}
    </Link>
  );
};

/* ─── Mobile Drawer Entry ─── */
const MobileNavEntry = ({ item, onClose, index = 0 }) => {
  const pathname = usePathname();
  const hasSublinks = item.submenu && item.subMenuItems?.length > 0;
  const isDirectLink = hasClickablePath(item.path) && !hasSublinks;
  const isDirectExternal = isExternalPath(item.path);

  return (
    <div className={cn(index > 0 && "mt-7")}>
      {isDirectLink ? (
        isDirectExternal ? (
          <a
            href={item.path}
            onClick={onClose}
            className={cn("block hover:opacity-80", MOBILE_MENU_TITLE_CLASS)}
          >
            {item.title}
          </a>
        ) : (
          <Link
            href={item.path}
            onClick={onClose}
            className={cn(
              "block hover:opacity-80",
              MOBILE_MENU_TITLE_CLASS,
              item.path === pathname && "opacity-65",
            )}
          >
            {item.title}
          </Link>
        )
      ) : (
        <h3 className={MOBILE_MENU_TITLE_CLASS}>
          {item.title}
        </h3>
      )}

      {hasSublinks && (
        <div className="mt-3 space-y-2">
          {item.subMenuItems.map((subItem, idx) => (
            isExternalPath(subItem.path) ? (
              <a
                key={idx}
                href={subItem.path}
                onClick={onClose}
                className={MOBILE_MENU_SUBLINK_CLASS}
              >
                {subItem.title}
              </a>
            ) : (
              <Link
                key={idx}
                href={subItem.path}
                onClick={onClose}
                className={cn(
                  MOBILE_MENU_SUBLINK_CLASS,
                  subItem.path === pathname && "opacity-65",
                )}
              >
                {subItem.title}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};
