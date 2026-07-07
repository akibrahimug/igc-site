/**
 * Shared helpers for Storyblok asset and link fields.
 */

/** Normalise an asset URL: force https, tolerate protocol-relative URLs. */
export function normalizeAssetUrl(src) {
  if (typeof src !== "string") return "";
  const cleaned = src.trim();
  if (!cleaned) return "";
  if (cleaned.startsWith("//")) return `https:${cleaned}`;
  if (cleaned.startsWith("http://")) {
    return cleaned.replace(/^http:\/\//, "https://");
  }
  return cleaned;
}

/** Accepts a Storyblok asset object or a plain URL string. */
export function getAssetSrc(value) {
  if (typeof value === "string") return normalizeAssetUrl(value);
  if (!value || typeof value !== "object") return "";
  return normalizeAssetUrl(value.filename || value.url || value.src || "");
}

/** Alt text for an asset, with a meaningful fallback (never the file URL). */
export function getAssetAlt(value, fallback = "") {
  if (value && typeof value === "object") {
    return value.alt || value.title || value.name || fallback;
  }
  return fallback;
}

/**
 * Href for a Storyblok link field (multilink). Internal story links become
 * site-absolute paths with a trailing slash; external URLs pass through.
 */
export function getLinkHref(link) {
  if (!link) return "";
  if (typeof link === "string") return link;

  const raw = link.cached_url || link.url || "";
  if (!raw) return "";
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith("mailto:")) return raw;

  const path = raw.replace(/^\/+|\/+$/g, "");
  return path ? `/${path}/` : "/";
}
