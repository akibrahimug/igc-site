"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { components } from "@/lib/storyblokComponents/all_components";

// guard so we don't init multiple times during fast refresh
let _inited = false;

export default function StoryblokInitClient({ children }) {
  if (!_inited) {
    storyblokInit({
      accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
      use: [apiPlugin],
      components,
    });
    _inited = true;
  }
  return children ?? null;
}
