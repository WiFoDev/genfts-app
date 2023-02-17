/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
