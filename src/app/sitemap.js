import { SITE_URL } from "@/lib/site";
import { fetchPublishedLinks } from "@/lib/storyblok";

// Regenerate the sitemap at most once per hour.
export const revalidate = 3600;

export default async function sitemap() {
  const links = await fetchPublishedLinks();

  const entries = links.map((link) => {
    // The "home" story is canonically served at the root; everything else at
    // its slug (trailingSlash is enabled in next.config). Folder index
    // stories also have is_startpage=true, so match on the slug only.
    const isHome = link.slug === "home";
    return {
      url: isHome ? `${SITE_URL}/` : `${SITE_URL}/${link.slug}/`,
      changeFrequency: "weekly",
      priority: isHome ? 1 : 0.7,
    };
  });

  const seen = new Set();
  const deduped = entries.filter(
    (entry) => !seen.has(entry.url) && seen.add(entry.url)
  );

  if (!seen.has(`${SITE_URL}/`)) {
    deduped.unshift({
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    });
  }

  return deduped;
}
