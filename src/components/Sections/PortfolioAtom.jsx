"use client";

import { useIgcData } from "@/app/ContextProvider";
import CustomPortfolioAtomTemplate from "@/components/Templates/CustomPortfolioAtomTemplate";
import PortfolioAtomTemplate from "@/components/Templates/PortfolioAtomTemplate";
import PagesHero from "@/components/Bloks/PagesHero";
import React from "react";

function PortfolioAtom() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }
  const pages_hero = story.content["pages_hero"];

  return (
    <div className="bg-black text-brown-100">
      <PagesHero story={pages_hero} />
      {story.slug === "floor_moves_to_slow_fashion" ||
      story.slug === "mistaken_fabrics" ||
      story.slug === "kampala_disaster" ||
      story.slug === "clothed_with_protection" ? (
        <CustomPortfolioAtomTemplate
          blok={story.content["custom_portfolio_atom_template"]}
        />
      ) : (
        <PortfolioAtomTemplate story={story} />
      )}
    </div>
  );
}

export default PortfolioAtom;
