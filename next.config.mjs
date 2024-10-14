/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "fastly.picsum.photos", "a.storyblok.com", "igcfashion.africa"],
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
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
