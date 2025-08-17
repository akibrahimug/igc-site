"use client";

import { useEffect, useState } from "react";
import {
  StoryblokComponent,
  useStoryblokState,
  useStoryblokBridge,
} from "@storyblok/react";

export default function StoryblokRenderer({ initialStory }) {
  const [story, setStory] = useState(initialStory);

  // Keep state in sync if you navigate to a different story
  useEffect(() => {
    if (initialStory?.id !== story?.id) setStory(initialStory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialStory?.id]);

  // Listen to Bridge: input (typing), change/published (Save)
  useStoryblokBridge(
    story?.id,
    async (evStoryOrEvent) => {
      // If Storyblok provides the full story, apply it directly
      if (evStoryOrEvent?.content) {
        setStory(evStoryOrEvent);
        return;
      }

      // Otherwise, refetch latest draft to guarantee the newest content
      try {
        const url = new URL(
          `https://cdn.storyblok.com/v2/cdn/stories/${story.full_slug}`
        );
        url.searchParams.set("version", "draft");
        url.searchParams.set("token", process.env.NEXT_PUBLIC_STORYBLOK_TOKEN);
        url.searchParams.set("cv", Date.now().toString()); // bust cache

        const res = await fetch(url.toString());
        const json = await res.json();
        if (json?.story) setStory(json.story);
      } catch {
        // ignore network errors in preview
      }
    },
    { preventClicks: true }
  );

  // This hook wires the story to the Bridge for live field updates
  const liveStory = useStoryblokState(story);

  if (!liveStory?.content) return null;
  return <StoryblokComponent blok={liveStory.content} />;
}
