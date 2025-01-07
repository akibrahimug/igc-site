import Navigation from "@/components/Bloks/Navigation";
import Footer from "@/components/Sections/Footer";
import StoryblokProvider from "@/components/StoryblokProvider";

import "../global.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { components } from "@/lib/storyblokComponents/all_components";
import { getStoryblokApi } from "@storyblok/react/rsc";
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

const datasource = await getStoryblokApi().get(`cdn/datasource_entries`, {
  version: "draft",
});

export default function RootLayout({ children, navigationLinks }) {
  return (
    <html lang="en">
      <body>
        <StoryblokProvider>
          <div>
            <Navigation navigationLinks={navigationLinks} />
            {children}
            <Footer datasource={datasource} />
          </div>
        </StoryblokProvider>
      </body>
    </html>
  );
}
