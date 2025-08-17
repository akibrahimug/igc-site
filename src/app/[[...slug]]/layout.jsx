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
import AppEntryAnimation from "@/components/AppEntryAnimation";
import PageTransition from "@/components/PageTransition";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

const datasource = await getStoryblokApi().get(`cdn/datasource_entries`, {
  version: "draft",
});

const links = await getStoryblokApi().get("cdn/links/", { version: "draft" });
const navigation = links.data?.links || {};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        {/* Register components & SDK on the CLIENT so the Bridge can use them */}
        <StoryblokInitClient>
          <AppEntryAnimation>
            <Navigation navigation={navigation} />
            <PageTransition>{children}</PageTransition>
            <Footer datasource={datasource} navigation={navigation} />
          </AppEntryAnimation>
        </StoryblokInitClient>

        {/* Load the Bridge script once */}
        <StoryblokBridgeClient />
      </body>
    </html>
  );
}
