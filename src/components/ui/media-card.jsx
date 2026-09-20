"use client";
import Link from "next/link";
import FadeImage from "@/components/ui/fade-image";
import { cn } from "@/lib/utils";
import { getAssetSrc, getAssetAlt, getLinkHref } from "@/utils/storyblok";

/**
 * MediaCard — the shared "lookbook plate" card.
 *
 * variant="overlay"  image plate with an eyebrow + Bebas title sitting on a
 *                    bottom scrim; the title's hairline extends on hover.
 * variant="stacked"  image plate with the text block below (used for news /
 *                    editorial cards): hairline, eyebrow-style title, caption.
 *
 * `image` accepts a Storyblok asset object or a URL string. `href` accepts a
 * Storyblok link field or a path string; when omitted the card is inert.
 */
export default function MediaCard({
  variant = "overlay",
  href,
  image,
  title,
  eyebrow,
  caption,
  aspect = "aspect-[3/4]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  className,
}) {
  const src = getAssetSrc(image);
  const alt = getAssetAlt(image, title || eyebrow || "");
  const url = getLinkHref(href);
  const isExternal = /^(https?:)?\/\//i.test(url);

  const plate = (
    <div className={cn("relative overflow-hidden bg-black-900", aspect)}>
      {src && (
        <FadeImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", url && "group-hover:scale-[1.03]")}
        />
      )}

      {variant === "overlay" && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 px-4 pb-4 md:px-5 md:pb-5">
          {eyebrow && (
            <p className="font-body text-[0.6875rem] uppercase tracking-[0.25em] text-brown-100/60 mb-1.5">
              {eyebrow}
            </p>
          )}
          {title && (
            <h3 className="font-bebas-neue text-2xl md:text-3xl leading-none tracking-wide text-brown-100">
              {title}
            </h3>
          )}
          <span
            aria-hidden="true"
            className={cn(
              "mt-3 block h-px w-8 bg-brown-100/40 transition-all duration-500 ease-out",
              url && "group-hover:w-full group-hover:bg-brown-100/70"
            )}
          />
        </div>
      )}
    </div>
  );

  const body = (
    <>
      {plate}
      {variant === "stacked" && (
        <div className="mt-4 border-t border-brown-100/25 pt-3 text-left">
          {eyebrow && (
            <p className="font-body text-[0.6875rem] uppercase tracking-[0.25em] text-brown-100/60 mb-1.5">
              {eyebrow}
            </p>
          )}
          {title && (
            <h3 className="font-bebas-neue text-2xl leading-none tracking-wide text-brown-100">
              {title}
            </h3>
          )}
          {caption && (
            <p className="font-body mt-2 text-base leading-relaxed text-brown-100/80 line-clamp-3">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  );

  const cardClasses = cn(
    "group block h-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brown-100/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black",
    className
  );

  if (!url) {
    return <div className={cardClasses}>{body}</div>;
  }

  if (isExternal) {
    return (
      <a href={url} className={cardClasses}>
        {body}
      </a>
    );
  }

  return (
    <Link href={url} className={cardClasses}>
      {body}
    </Link>
  );
}
