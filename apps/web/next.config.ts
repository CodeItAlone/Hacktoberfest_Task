import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@resurox/schemas",
    "@resurox/matching",
    "@resurox/ai",
    "@resurox/db",
    "@resurox/resume"
  ]
};

export default nextConfig;
