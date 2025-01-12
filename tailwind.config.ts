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
        background2: "var(--background2)",
        foreground: "var(--foreground)",
        lightGray: "var(--lightGray)",
      },
    },
  },
  keyframes: {
    zoomIn: {
      "0%": { transform: "scale-0" },
      "100%": { transform: "scale-100" },
    },
  },
  plugins: [],
} satisfies Config;
