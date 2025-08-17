"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const TitleAnimation = forwardRef(
  (
    { children, className = "", delay = 0, duration = 0.8, y = 50, ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: y,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

TitleAnimation.displayName = "TitleAnimation";

export default TitleAnimation;
