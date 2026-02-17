import Navigation from "@/components/Bloks/Navigation";
import Footer from "@/components/Sections/Footer";
import "../global.css";

import {
  getStoryblokApi,
  storyblokInit,
  apiPlugin,
} from "@storyblok/react/rsc";
import StoryblokBridgeClient from "@/components/StoryblokBridgeClient";
import StoryblokInitClient from "@/components/StoryblokInitClient";

const EMPTY_DATASOURCE = { data: { datasource_entries: [] } };

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

let datasource = EMPTY_DATASOURCE;
try {
  datasource = await getStoryblokApi().get(`cdn/datasource_entries`, {
    version: "published",
  });
} catch (error) {
  console.error("Failed to fetch Storyblok datasource entries", error);
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        {/* Register components & SDK on the CLIENT so the Bridge can use them */}
        <StoryblokInitClient>
          <Navigation navigation={datasource} />
          {children}
          <Footer datasource={datasource} />
        </StoryblokInitClient>

        {/* Load the Bridge script once */}
        <StoryblokBridgeClient />
      </body>
    </html>
  );
}
