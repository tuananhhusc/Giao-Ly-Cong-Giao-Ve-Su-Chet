import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Giao-Ly-Cong-Giao-Ve-Su-Chet";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
