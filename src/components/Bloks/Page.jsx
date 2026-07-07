"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

/**
 * Generic Storyblok "page" content type: renders whatever bloks the editors
 * put in the story's body field. Used by folder index stories such as
 * brand_principles.
 */
export default function Page({ blok }) {
  const body = Array.isArray(blok?.body) ? blok.body : [];

  return (
    <main {...storyblokEditable(blok)}>
      {body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
