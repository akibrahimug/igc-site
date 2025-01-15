"use client";
import React from "react";
import PagesHero from "@/components/Bloks/PagesHero";
import { Banner } from "@/components/Bloks/Banner";
import { useIgcData } from "@/app/ContextProvider";
import PortfolioGalleryTemplate from "@/components/Templates/PortfolioGalleryTemplate";
function Events() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }
  const blok = story.content;
  const banner = blok.banner;
  const page_hero = blok.pages_hero;
  const portfolio_gallery = blok.portfolio_gallery_atom;
  return (
    <div className="bg-black">
      <PagesHero story={page_hero} />
      <Banner story={banner} />
      <div className="mt-10 p-4">
        <PortfolioGalleryTemplate story={portfolio_gallery} />
      </div>
    </div>
  );
}

export default Events;
