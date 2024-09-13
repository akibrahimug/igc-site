import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection2";
import ScrollIndicator from "@/components/Indicators";
import { getStoryblokApi } from "@storyblok/react/rsc";

export const metadata = {
  title: "IGC Home",
};

export default async function Home() {
  const {
    data: { story },
  } = await fetchData();

  return (
    <>
      {/* Main container with smooth scrolling and snap behavior */}
      <div className="h-screen overflow-y-scroll scroll-smooth relative z-0">
        {/* Hero section with content from Storyblok */}
        <Hero blok={story?.content} />
        {/* Home section with more content */}
        <HomeSection blok={story?.content} />
      </div>
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </>
  );
}

export async function fetchData() {
  // Fetch data from Storyblok API
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/igc/home`, sbParams, {
    cache: "no-store",
  });
}
