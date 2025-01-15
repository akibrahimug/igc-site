import { notFound } from "next/navigation";
import { StoryblokComponent } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react/rsc";
import IgcProvider from "@/app/ContextProvider";

// Use generateStaticParams for static generation of routes
export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/", {
    version: "published",
  });

  // 1) Extract all link keys
  const linkKeys = Object.keys(data.links);

  // 2) Filter out any items where `is_folder` is true
  const nonFolderLinkKeys = linkKeys.filter(
    (key) => !data.links[key].is_folder
  );

  // 3) Map them to the slug shape Next expects
  const routes = nonFolderLinkKeys.map((key) => {
    const slug = data.links[key].slug; // "about", "brand_principles", "brand_principles/community", etc.
    return {
      slug: slug.split("/"), // e.g. "brand_principles/community" => ["brand_principles","community"]
    };
  });

  // 4) Optionally add your root path as well (slug: [])
  return [...routes, { slug: [] }];
}

export default async function Page({ params }) {
  const slug = params?.slug?.length ? params.slug : ["home"]; // default to "home"
  const sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(
    `cdn/stories/${slug.join("/")}`,
    sbParams
  );

  if (!data?.story) {
    notFound();
  }

  const story = data.story;
  return (
    <IgcProvider story={story}>
      <StoryblokComponent blok={story.content} />
    </IgcProvider>
  );
}
