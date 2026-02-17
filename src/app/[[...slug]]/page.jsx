import { notFound } from "next/navigation";
import { getStoryblokApi } from "@storyblok/react/rsc";
import IgcProvider from "@/app/ContextProvider";
import StoryblokRenderer from "@/components/StoryblokRenderer";
export const revalidate = 0;
export const dynamic = "force-dynamic";

const isStoryblokNotFound = (error) =>
  error?.status === 404 || error?.response?.status === 404;

async function getStartPageSlug(storyblokApi, version) {
  try {
    const { data } = await storyblokApi.get("cdn/links/", { version });
    const links = Object.values(data?.links || {});
    const startPage = links.find((link) => link?.is_startpage);
    return startPage?.slug || null;
  } catch (error) {
    if (!isStoryblokNotFound(error)) {
      console.error("Failed to resolve Storyblok startpage slug", error);
    }
    return null;
  }
}

async function getStoryBySlug(storyblokApi, slugPath, version) {
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slugPath}`, {
      version,
    });
    return data?.story || null;
  } catch (error) {
    if (isStoryblokNotFound(error)) {
      return null;
    }
    throw error;
  }
}
// Use generateStaticParams for static generation of routes
export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get("cdn/links/", {
      version: "draft",
    });

    const params = Object.keys(data?.links || {})
      .map((linkKey) => {
        const slug = data?.links?.[linkKey]?.slug;
        if (!slug) return null;
        return { slug: slug.split("/") };
      })
      .filter(Boolean);

    return params.concat([{ slug: [] }]);
  } catch (error) {
    if (!isStoryblokNotFound(error)) {
      console.error("Failed to fetch Storyblok links for static params", error);
    }
    return [{ slug: [] }];
  }
}

export default async function Page({ params }) {
  const version = "draft";
  const requestedSlug = Array.isArray(params?.slug) ? params.slug.join("/") : "";
  const storyblokApi = getStoryblokApi();
  const primarySlug = requestedSlug || "home";

  let story = await getStoryBySlug(storyblokApi, primarySlug, version);

  // Root route fallback: use actual Storyblok startpage slug if "home" is absent.
  if (!story && !requestedSlug) {
    const startPageSlug = await getStartPageSlug(storyblokApi, version);
    if (startPageSlug && startPageSlug !== primarySlug) {
      story = await getStoryBySlug(storyblokApi, startPageSlug, version);
    }
  }

  if (!story) {
    notFound();
  }

  return (
    <IgcProvider story={story}>
      <StoryblokRenderer initialStory={story} />
    </IgcProvider>
  );
}
