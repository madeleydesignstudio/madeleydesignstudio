import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        boska: ["var(--font-boska)"],
        switzer: ["var(--font-switzer)"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "no-hover": { raw: "(hover: none)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
