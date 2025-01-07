"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { components } from "@/lib/storyblokComponents/all_components";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
