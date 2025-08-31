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
        hostname: "blogs.gokulcodes.dev",
        pathname: "/api/images/**",
      },
    ],
  },
};

export default nextConfig;
