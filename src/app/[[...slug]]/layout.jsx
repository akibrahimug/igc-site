import Navigation from "@/components/Bloks/Navigation";
import Footer from "@/components/Sections/Footer";
import ScrollIndicator from "@/components/Bloks/Indicators";
import "../global.css";

import { getStoryblokApi } from "@/lib/storyblok";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DEFAULT_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOGO_PATH,
  SOCIAL_PROFILES,
} from "@/lib/site";
import StoryblokBridgeClient from "@/components/StoryblokBridgeClient";
import StoryblokInitClient from "@/components/StoryblokInitClient";

const EMPTY_DATASOURCE = { data: { datasource_entries: [] } };

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: SITE_URL,
    title: SITE_DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_LOGO_PATH, alt: `${SITE_NAME} logo` }],
  },
  twitter: {
    card: "summary",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

// Structured data so search engines understand this is a fashion brand
// (Organization/Brand) and show the proper site name (WebSite).
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Brand"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      slogan: SITE_TAGLINE,
      description: SITE_DESCRIPTION,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SITE_LOGO_PATH}`,
      },
      sameAs: SOCIAL_PROFILES,
      address: {
        "@type": "PostalAddress",
        addressCountry: "UG",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};

async function getDatasource() {
  try {
    return await getStoryblokApi().get(`cdn/datasource_entries`, {
      version: "published",
    });
  } catch (error) {
    console.error("Failed to fetch Storyblok datasource entries", error);
    return EMPTY_DATASOURCE;
  }
}

export default async function RootLayout({ children }) {
  const datasource = await getDatasource();

  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Register components & SDK on the CLIENT so the Bridge can use them */}
        <StoryblokInitClient>
          <Navigation navigation={datasource} />
          {children}
          <Footer datasource={datasource} />
          <ScrollIndicator />
        </StoryblokInitClient>

        {/* Load the Bridge script once */}
        <StoryblokBridgeClient />
      </body>
    </html>
  );
}
