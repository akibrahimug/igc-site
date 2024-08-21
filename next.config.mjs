/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "a.storyblok.com"],
  },
  trailingSlash: true,
  swcMinify: true,
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
