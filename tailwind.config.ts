import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0F142A",
          DEFAULT: "#191F40", // Midnight Navy (Dominant)
          800: "#222B56",
          700: "#2D396E",
        },
        cenderawasih: {
          pink: "#D84C83", // Cenderawasih Pink
          gold: "#DCC66B", // Cenderawasih Gold
        },
        accent: {
          blue: "#E8EEF8", // Soft Blue
          dark: "#18213A", // Dark Text
          gray: "#F7F9FC", // Light Gray background
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
