import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['placehold.co','cdn.magicui.design/','https://odoocdn.com/'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
    // Allow unoptimized images for better compatibility
    unoptimized: false,
  },
};

export default nextConfig;
