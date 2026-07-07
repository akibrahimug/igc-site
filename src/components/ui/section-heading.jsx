"use client";
import { cn } from "@/lib/utils";

/**
 * SectionHeading — shared editorial section title: optional clay eyebrow,
 * Bebas title, and a hairline rule running to the container edge.
 */
export default function SectionHeading({ eyebrow, title, className }) {
  return (
    <header className={cn("text-left", className)}>
      {eyebrow && (
        <p className="font-body text-xs uppercase tracking-[0.25em] text-brown-300 mb-2">
          {eyebrow}
        </p>
      )}
      <div className="flex items-baseline gap-6">
        <h2 className="font-bebas-neue text-4xl md:text-5xl tracking-wide text-brown-100 whitespace-nowrap">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-brown-100/25" />
      </div>
    </header>
  );
}
