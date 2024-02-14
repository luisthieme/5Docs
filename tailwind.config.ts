import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,mjs,jsx,ts,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "5minds-orange": "#f7a823",
        "5minds-orange-light": "#f9b745",
      },
      height: {
        "screen-navbar": "calc(100vh - 64px)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
