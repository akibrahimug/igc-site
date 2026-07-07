import { notFound } from "next/navigation";
import IgcProvider from "@/app/ContextProvider";
import StoryblokRenderer from "@/components/StoryblokRenderer";
import {
  fetchStory,
  fetchPublishedLinks,
  fetchStartPageSlug,
  getContentVersion,
} from "@/lib/storyblok";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_DEFAULT_TITLE,
} from "@/lib/site";

// Serve statically generated pages and refresh them in the background every
// 5 minutes. Draft Mode requests (Storyblok visual editor) bypass the cache
// automatically, so editors still see live draft content.
export const revalidate = 300;

async function resolveStory(params) {
  const version = getContentVersion();
  const requestedSlug = Array.isArray(params?.slug)
    ? params.slug.join("/")
    : "";
  const primarySlug = requestedSlug || "home";

  let story = await fetchStory(primarySlug, version);

  // Root route fallback: use actual Storyblok startpage slug if "home" is absent.
  if (!story && !requestedSlug) {
    const startPageSlug = await fetchStartPageSlug();
    if (startPageSlug && startPageSlug !== primarySlug) {
      story = await fetchStory(startPageSlug, version);
    }
  }

  return { story, requestedSlug };
}

// Pre-render every published story at build time.
export async function generateStaticParams() {
  const links = await fetchPublishedLinks();
  const params = links.map((link) => ({
    slug: link.slug.split("/").filter(Boolean),
  }));
  return params.concat([{ slug: [] }]);
}

// Story names are often machine slugs ("brand_principles"); make them
// presentable when no explicit SEO title is set.
function humanizeName(name) {
  if (!name || typeof name !== "string") return name;
  const spaced = name.replace(/[_-]+/g, " ").trim();
  return spaced.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Per-page SEO. Reads the Storyblok SEO plugin field when present and falls
// back to story/brand values, so every page gets a unique, branded snippet
// in search results.
export async function generateMetadata({ params }) {
  const { story, requestedSlug } = await resolveStory(params);
  if (!story) return {};

  // The home story is also reachable at its own slug; canonicalise both to "/"
  // so search engines don't index duplicate pages. (Don't use is_startpage
  // here — it is also true for folder index stories like /portfolio/.)
  const isHome = !requestedSlug || requestedSlug === "home";
  const canonicalPath = isHome ? "/" : `/${requestedSlug}/`;

  const seo = story.content?.seo || story.content?.metatags || {};
  // Note: the layout's title.template doesn't apply to a page in the same
  // segment, so the brand suffix is added here.
  const pageTitle = seo.title || seo.og_title || humanizeName(story.name);
  const title = isHome ? SITE_DEFAULT_TITLE : `${pageTitle} | ${SITE_NAME}`;
  const description =
    seo.description || seo.og_description || SITE_DESCRIPTION;
  const ogImage = seo.og_image || seo.twitter_image || null;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: `${SITE_URL}${canonicalPath}`,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function Page({ params }) {
  const { story } = await resolveStory(params);

  if (!story) {
    notFound();
  }

  return (
    <IgcProvider story={story}>
      <StoryblokRenderer initialStory={story} />
    </IgcProvider>
  );
}
