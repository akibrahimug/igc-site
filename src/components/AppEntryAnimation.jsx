"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { animations, easing, durations } from "@/lib/animations";

export default function AppEntryAnimation({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay before showing content
      setTimeout(() => setIsVisible(true), 100);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    ...animations.page,
    animate: {
      ...animations.page.animate,
      transition: {
        ...animations.page.transition,
        staggerChildren: 0.1,
      },
    },
  };

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: durations.normal,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            variants={loadingVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              {...animations.loading}
              className="text-brown-300 text-2xl font-bold"
            >
              CREATE | SHARE | INSPIRE
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}
