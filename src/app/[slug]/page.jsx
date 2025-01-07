import { notFound } from "next/navigation";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react/rsc";
import RootLayout from "@/app/[slug]/layout";
import IgcProvider from "@/app/ContextProvider";
export default async function Page({ params }) {
  const { slug } = params;

  const { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, {
    version: "published",
  });

  const links = await getStoryblokApi().get("cdn/links/", {
    version: "draft",
  });

  const navigation = links.data.links;

  if (!data || !data.story) {
    notFound();
  }

  const story = data.story;

  return (
    <IgcProvider story={story} navigationLinks={navigation}>
      <StoryblokComponent blok={story.content} navigationLinks={navigation} />
    </IgcProvider>
  );
}

// export async function getStaticProps({ params }) {
//   let slug = params.slug ? params.slug.join("/") : "home";

//   let sbParams = {
//     version: "draft", // or 'published'
//   };

//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//     revalidate: 3600,
//   };
// }

// export async function getStaticPaths() {
//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get("cdn/links/", {
//     version: "draft",
//   });

//   let paths = [];
//   Object.keys(data.links).forEach((linkKey) => {
//     if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
//       return;
//     }

//     const slug = data.links[linkKey].slug;
//     let splittedSlug = slug.split("/");

//     paths.push({ params: { slug: splittedSlug } });
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }
