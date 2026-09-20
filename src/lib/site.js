/**
 * Central site/brand configuration used for SEO metadata, structured data,
 * robots.txt and the sitemap. Override the base URL per environment with
 * NEXT_PUBLIC_SITE_URL (e.g. a preview deployment).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.igcfashion.africa"
).replace(/\/$/, "");

export const SITE_NAME = "IGC Fashion";

export const SITE_TAGLINE =
  "Rooted in culture. Centred on climate. Powered by community.";

export const SITE_DEFAULT_TITLE = `${SITE_NAME} — Sustainable Ugandan Fashion`;

export const SITE_DESCRIPTION =
  "IGC Fashion is a Ugandan sustainable fashion brand creating climate-conscious, culture-rooted African design — garments, showcases and community projects made in Uganda.";

export const SITE_KEYWORDS = [
  "IGC Fashion",
  "sustainable fashion",
  "African fashion brand",
  "Ugandan fashion",
  "climate-conscious clothing",
  "ethical fashion Africa",
  "slow fashion Uganda",
  "African streetwear",
];

export const SITE_LOGO_PATH = "/images/igc-logo-white.PNG";

export const SOCIAL_PROFILES = [
  "https://instagram.com/igc_fashion",
  "https://facebook.com/igcfashion",
  "https://www.youtube.com/@igcfashionuganda4180",
  "https://linkedin.com/company/igcfashion",
  "https://tiktok.com/@igcfashionug",
];
