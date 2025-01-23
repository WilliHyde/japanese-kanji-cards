import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/japanese-kanji-cards" : "",
  basePath: isProd ? "/japanese-kanji-cards" : "",
  output: "export"
};

export default nextConfig;
