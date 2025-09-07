"use client";
import React from "react";
import PagesHero from "@/components/Bloks/PagesHero";
import { useIgcData } from "@/app/ContextProvider";
import PortfolioGalleryTemplate from "@/components/Templates/PortfolioGalleryTemplate";
function Events() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }
  const blok = story.content;
  const page_hero = blok.pages_hero;
  const portfolio_gallery = blok.portfolio_gallery_atom;
  console.log(portfolio_gallery, "portfolio_gallery===>portfolio");
  return (
    <div className="bg-black">
      <PagesHero story={page_hero} />
      <div className="mt-10 p-4">
        <PortfolioGalleryTemplate story={portfolio_gallery} />
      </div>
    </div>
  );
}

export default Events;
