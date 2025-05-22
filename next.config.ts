import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => any } }) =>
        rule.test?.test?.(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add custom loader for SVG
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );
    return config;
  },
  publicRuntimeConfig: {
    basePath:  process.env.NEXT_PUBLIC_BASE_PATH || "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
