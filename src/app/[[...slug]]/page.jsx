import { notFound } from "next/navigation";
import { StoryblokComponent } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react/rsc";
import IgcProvider from "@/app/ContextProvider";

// Use generateStaticParams for static generation of routes
export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft", // or 'published'
  });

  return Object.keys(data.links)
    .map((linkKey) => {
      const slug = data.links[linkKey].slug;
      return {
        slug: slug.split("/"),
      };
    })
    .concat([{ slug: [] }]); // Add root path
}

export default async function Page({ params }) {
  let slug = params?.slug ? params.slug : ["home"];
  let sbParams = {
    version: "draft", // or 'publish'
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(
    `cdn/stories/${slug.join("/")}`,
    sbParams
  );

  if (!data || !data.story) {
    notFound();
  }

  const story = data.story;

  return (
    <IgcProvider story={story}>
      <StoryblokComponent blok={story.content} />
    </IgcProvider>
  );
}
