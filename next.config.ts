import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'], // 👈 add allowed image domains here
  },
};

export default nextConfig;
