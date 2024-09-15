import "../../assets/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
const components = {
  page: Page,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
