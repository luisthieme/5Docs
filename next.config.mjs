import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import withSearch from "./src/search/search.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withSearch(withMDX(nextConfig));
