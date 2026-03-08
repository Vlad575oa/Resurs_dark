import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#256af4",
        "background-light": "#f5f6f8",
        "background-dark": "#0a0e1a",
        "surface-dark": "#111827",
        "border-dark": "#1e293b",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
