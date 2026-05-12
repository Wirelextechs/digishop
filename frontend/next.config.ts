import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Allow any host for live preview proxy
  experimental: {
    // @ts-ignore
    allowedRevalidateHeaderKeys: ['host', 'x-forwarded-host'],
  }
};

export default nextConfig;
