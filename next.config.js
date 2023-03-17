/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "breezebranding.com",
      "lh3.googleusercontent.com",
      "links.papareact.com",
    ],
  },
};

module.exports = nextConfig;
