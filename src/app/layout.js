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
          <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-0">
          <Navigation />
          {children}
          <Footer />
          </div>
        </body>
      </html>
    </StoryblokProvider>
  );
}
