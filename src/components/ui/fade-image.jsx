"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * FadeImage — drop-in replacement for next/image: shows a warm shimmer
 * skeleton while the image loads, then reveals it with a soft fade-and-settle
 * (opacity + slight scale). Works in both `fill` and width/height modes;
 * all other next/image props pass through.
 *
 * `className` styles the img itself (object-fit, hover effects, …);
 * `wrapperClassName` styles the skeleton-bearing wrapper.
 */
export default function FadeImage({
  className,
  wrapperClassName,
  alt = "",
  fill,
  onLoad,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (event) => {
      setLoaded(true);
      onLoad?.(event);
    },
    [onLoad]
  );

  // Cached images can finish before hydration, in which case onLoad never
  // fires — check completeness when the element attaches.
  const handleRef = useCallback((img) => {
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <span
      className={cn(
        "block overflow-hidden",
        fill ? "absolute inset-0" : "relative",
        wrapperClassName
      )}
    >
      <Image
        {...props}
        ref={handleRef}
        alt={alt}
        fill={fill}
        onLoad={handleLoad}
        className={cn(
          "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]",
          className
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "skeleton-shimmer pointer-events-none absolute inset-0 transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100"
        )}
      />
    </span>
  );
}
