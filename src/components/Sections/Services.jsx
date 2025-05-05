"use client";
import React from "react";
import PagesHero from "@/components/Bloks/PagesHero";
import { useIgcData } from "@/app/ContextProvider";
import HomeLastSection from "@/components/Bloks/HomelastSection";
function Services() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }
  const blok = story.content;
  const page_hero = blok.pages_hero;
  return (
    <div className="bg-black">
      <PagesHero story={page_hero} />
      <HomeLastSection blok={blok["home_page_last_section"][0]} />
    </div>
  );
}

export default Services;
