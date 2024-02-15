import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import createMDX from "@next/mdx";
import withSearch from "./src/search/search.mjs";
import * as acorn from "acorn";

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

function rehypeAddMDXExports(getExports) {
  return (tree) => {
    let exports = Object.entries(getExports(tree));

    for (let [name, value] of exports) {
      for (let node of tree.children) {
        if (
          node.type === "mdxjsEsm" &&
          new RegExp(`export\\s+const\\s+${name}\\s*=`).test(node.value)
        ) {
          return;
        }
      }

      let exportStr = `export const ${name} = ${value}`;

      tree.children.push({
        type: "mdxjsEsm",
        value: exportStr,
        data: {
          estree: acorn.parse(exportStr, {
            sourceType: "module",
            ecmaVersion: "latest",
          }),
        },
      });
    }
  };
}

function getSections(node) {
  let sections = [];
  let textValue = "";

  for (let child of node.children ?? []) {
    if (child.type === "element" && child.tagName === "h2") {
      // wenn man sich nicht gegen die philosophie von mdx wehrt während man mdx benutzt dann muss man sowas auch nicht machen :(
      // if (child.children[0].value != undefined) {
      //   textValue = child.children[0].value;
      // } else {
      //   textValue = child.children[0].children[0].value;
      // }
      textValue = child.children[0].value;
      sections.push(`{
        title: ${JSON.stringify(textValue)},
        id: ${JSON.stringify(child.properties.id)},
        ...${child.properties.annotation}
      }`);
    } else if (child.children) {
      sections.push(...getSections(child));
    }
  }

  return sections;
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAddMDXExports,
        (tree) => ({
          sections: `[${getSections(tree).join()}]`,
        }),
      ],
    ],
  },
});

export default withSearch(withMDX(nextConfig));
