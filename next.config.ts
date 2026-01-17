import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // IMPORTANT for GitHub Pages project sites:
  // Replace YOUR_REPO with your repo name exactly (unless repo is username.github.io)
  basePath: "/Shelton-Detailing",
  assetPrefix: "/Shelton-Detailing/",
};

export default nextConfig;
