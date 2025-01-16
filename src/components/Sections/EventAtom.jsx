"use client";
import EventAtomTemplate from "@/components/Templates/EventAtomTemplate";
import { useIgcData } from "@/app/ContextProvider";
import React from "react";

function EventAtom() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }

  return <EventAtomTemplate story={story} />;
}

export default EventAtom;
