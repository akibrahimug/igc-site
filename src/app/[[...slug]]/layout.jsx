import Navigation from "@/components/Bloks/Navigation";
import Footer from "@/components/Sections/Footer";
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

const links = await getStoryblokApi().get("cdn/links/", {
  version: "draft",
});

const navigation = links.data?.links || {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navigation navigation={navigation} />
          {children}
          <Footer datasource={datasource} navigation={navigation} />
        </div>
      </body>
    </html>
  );
}
