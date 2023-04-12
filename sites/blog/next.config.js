/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "contentstack"],
  images: {
    remotePatterns: [
      {
        hostname: "images.contentstack.io",
      },
    ],
  },
};

module.exports = nextConfig;
