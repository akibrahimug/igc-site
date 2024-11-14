import "./global.css";
import Navigation from "@/components/Navigation";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import Footer from "@/components/Footer";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <Navigation />
          <main>
          {children}
          <Footer />
          </main>
        </body>
      </html>
    </StoryblokProvider>
  );
}
