"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
  
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: "eu",
    },
  });

const StoryblokProvider = ({
  children,
}) => {
  return children;
};

export default StoryblokProvider;