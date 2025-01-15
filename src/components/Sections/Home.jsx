"use client";
import { useIgcData } from "@/app/ContextProvider";
import Hero from "@/components/Bloks/Hero";
import Gallery from "@/components/Bloks/Gallery";
import ScrollIndicator from "@/components/Bloks/Indicators";
import { storyblokEditable } from "@storyblok/react";
import HomeLastSection from "@/components/Bloks/HomelastSection";
export default function Home() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }

  const blok = story.content;
  return (
    <div className="bg-black" {...storyblokEditable(blok)}>
      <Hero blok={blok} />
      <Gallery blok={blok} />
      <HomeLastSection blok={blok["home_page_last_section"][0]} />
      <ScrollIndicator />
    </div>
  );
}
