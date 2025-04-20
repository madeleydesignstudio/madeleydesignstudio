import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      boska: ["var(--font-boska)"],
      bricolage: ["var(--font-bricolage)"],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
