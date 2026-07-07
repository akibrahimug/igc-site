import { cache } from "react";
import { draftMode } from "next/headers";
import {
  getStoryblokApi,
  storyblokInit,
  apiPlugin,
} from "@storyblok/react/rsc";

// Single server-side SDK registration. Every server module (layout, page,
// sitemap) should import the API from here instead of calling storyblokInit
// itself.
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export { getStoryblokApi };

const isStoryblokNotFound = (error) =>
  error?.status === 404 || error?.response?.status === 404;

/**
 * Which content version to serve. Published for visitors and crawlers;
 * draft only when Next.js Draft Mode was enabled via /api/preview
 * (i.e. inside the Storyblok visual editor).
 */
export function getContentVersion() {
  try {
    return draftMode().isEnabled ? "draft" : "published";
  } catch {
    // draftMode() is unavailable outside a request scope (e.g. sitemap build)
    return "published";
  }
}

/**
 * Fetch a single story. Deduped per request with React cache() so the page
 * and generateMetadata share one API call. Returns null when not found.
 */
export const fetchStory = cache(async (slugPath, version) => {
  try {
    const { data } = await getStoryblokApi().get(`cdn/stories/${slugPath}`, {
      version,
      ...(version === "draft" ? { cv: Date.now() } : {}),
    });
    return data?.story || null;
  } catch (error) {
    if (isStoryblokNotFound(error)) {
      return null;
    }
    throw error;
  }
});

/**
 * All published links (used for static params and the sitemap).
 * Folders carry no content of their own and are excluded. Slugs are
 * normalised: the links API returns folder index stories as "portfolio/".
 */
export const fetchPublishedLinks = cache(async () => {
  try {
    const { data } = await getStoryblokApi().get("cdn/links/", {
      version: "published",
    });
    return Object.values(data?.links || {})
      .filter((link) => link?.slug && !link?.is_folder)
      .map((link) => ({
        ...link,
        slug: link.slug.replace(/^\/+|\/+$/g, ""),
      }));
  } catch (error) {
    console.error("Failed to fetch Storyblok links", error);
    return [];
  }
});

export const fetchStartPageSlug = cache(async () => {
  const links = await fetchPublishedLinks();
  // Only a root-level startpage counts as the site home — folder index
  // stories (e.g. portfolio/) are also flagged is_startpage.
  const startPage = links.find(
    (link) => link?.is_startpage && !link?.parent_id
  );
  return startPage?.slug || null;
});
