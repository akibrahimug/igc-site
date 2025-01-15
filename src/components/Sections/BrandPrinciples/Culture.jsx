"use client";
import React from "react";
import BrandPrinciplesPagesTemplate from "@/components/Templates/BrandPrinciplesPagesTemplate";
import { useIgcData } from "@/app/ContextProvider";
const Culture = () => {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }

  const blok = story.content;
  return <BrandPrinciplesPagesTemplate blok={blok} />;
};

export default Culture;
