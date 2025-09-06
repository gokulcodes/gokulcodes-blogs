import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // serverExternalPackages: ["puppeteer-core"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/images/**",
      },
      {
        protocol: "https",
        hostname: "img.gokulcodes.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
