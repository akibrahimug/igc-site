"use client";
import React from "react";
import { useIgcData } from "@/app/ContextProvider";
import BrandPrinciplesPagesTemplate from "@/components/Templates/BrandPrinciplesPagesTemplate";

const Enviroment = () => {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }

  const blok = story.content;
  return <BrandPrinciplesPagesTemplate blok={blok} />;
};

export default Enviroment;
