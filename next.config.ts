import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    // Disable the built-in image optimization on hosts where
    // the optimizer route isn't supported (e.g. some Render setups).
    unoptimized: true,
  },
};

export default nextConfig;
