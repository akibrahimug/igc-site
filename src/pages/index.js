"use client";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ScrollIndicator from "../components/Indicators";
import Gallery from "../components/Gallery";
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home(props) {
  const story = useStoryblokState(props.story);
  return (
    <>
      <Head>
        <title>{story ? story.name : "IGC Home"}</title>
      </Head>
      <Navigation />
      <div className="h-screen overflow-y-scroll  relative z-0">
        <Hero blok={story?.content} />
        <Gallery blok={story?.content} />
      </div>
      <ScrollIndicator />
      <StoryblokComponent blok={story?.content} />
    </>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "igc/home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
