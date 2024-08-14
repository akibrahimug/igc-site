/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "a.storyblok.com"],
  },
  trailingSlash: true,
  swcMinify: true,
  env: {
    USE_FILE_CACHE: process.env.USE_FILE_CACHE,
    USE_MEM_CACHE: process.env.USE_MEM_CACHE,
    USE_LOCAL_DATA: process.env.USE_LOCAL_DATA,
    STAGE: process.env.STAGE,
    SITE: process.env.SITE,
    STORYBLOK_ACCESS_TOKEN_FAQ: process.env.STORYBLOK_ACCESS_TOKEN_FAQ,
    STORYBLOK_ACCESS_TOKEN_EF_ACADEMY:
      process.env.STORYBLOK_ACCESS_TOKEN_EF_ACADEMY,
    STORYBLOK_ACCESS_TOKEN_CAREERS: process.env.STORYBLOK_ACCESS_TOKEN_CAREERS,
    STORYBLOK_ACCESS_TOKEN_TEACHONLINE:
      process.env.STORYBLOK_ACCESS_TOKEN_TEACHONLINE,
  },
  staticPageGenerationTimeout: 8000,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      process: false,
    };
    return config;
  },
};

export default nextConfig;
