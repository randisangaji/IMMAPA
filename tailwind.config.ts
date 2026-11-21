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
        // 60% Dominant: Pure White (Premier)
        premier: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFBFD",
          warm: "#F8FAFC",
        },
        // 25% Secondary: Navy / Dark Blue
        navy: {
          DEFAULT: "#191F40",
          dark: "#0F1329",
          mid: "#232B54",
          light: "#2E3A6E",
          muted: "#4B5580",
        },
        // 15% Supporting: Soft Gray
        soft: {
          DEFAULT: "#F1F5F9",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E2E8F0",
          400: "#CBD5E1",
          500: "#94A3B8",
          600: "#64748B",
          700: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "card": "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 25px -5px rgba(25,31,64,0.08), 0 8px 10px -6px rgba(25,31,64,0.04)",
        "elevated": "0 20px 40px -12px rgba(25,31,64,0.12)",
        "navy-glow": "0 0 30px rgba(25,31,64,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
