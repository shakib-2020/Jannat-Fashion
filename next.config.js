/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://jannat-fashion.vercel.app/",
      },
    ],
  },
};

module.exports = nextConfig;
