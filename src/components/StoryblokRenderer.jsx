"use client";

import { StoryblokComponent, useStoryblokState } from "@storyblok/react";

export default function StoryblokRenderer({ initialStory }) {
  // Live-updates via Storyblok Bridge on every save (and input)
  const story = useStoryblokState(initialStory); // no direct window usage

  if (!story?.content) return null;
  return <StoryblokComponent blok={story.content} />;
}
