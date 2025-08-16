"use client";
import { useEffect } from "react";

export default function StoryblokBridgeClient() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("sb-bridge")) return;
    const s = document.createElement("script");
    s.id = "sb-bridge";
    s.src = "https://app.storyblok.com/f/storyblok-v2-latest.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return null;
}
