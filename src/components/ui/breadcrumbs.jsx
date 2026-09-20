"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Story names are often machine slugs ("brand_principles"); make them
// presentable, matching the humanizing already done for page titles.
function humanizeSegment(segment) {
  const spaced = segment.replace(/[_-]+/g, " ").trim();
  return spaced.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Subtle breadcrumb trail derived from the current URL, so it works for
 * every page that renders PagesHero without each one having to pass in
 * its own slug data. Renders nothing on the home page.
 */
export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = (pathname || "/").split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join("/")}/`,
    label: humanizeSegment(segment),
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-20 w-full px-4 md:px-8 py-4 text-xs md:text-sm uppercase tracking-wide"
    >
      <ol className="flex flex-wrap items-center gap-2 text-brown-100/50">
        <li>
          <Link href="/" className="hover:text-brown-100 transition-colors">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-brown-100/30">
                /
              </span>
              {isLast ? (
                <span className="text-brown-100" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-brown-100 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
