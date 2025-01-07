// lib/storyblok.ts
import { storyblokInit, apiPlugin } from "@storyblok/react";

const { storyblok } = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export { storyblok };
