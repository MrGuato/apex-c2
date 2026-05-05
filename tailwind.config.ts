import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sharp "radar green" accent — used sparingly for buttons,
        // technical terms, status indicators, and hover glows.
        radar: {
          DEFAULT: "#00FF9D",
          dim: "#00CC7E",
          50: "#E6FFF5",
          100: "#B3FFE0",
          200: "#80FFCB",
          300: "#4DFFB6",
          400: "#1AFFA1",
          500: "#00FF9D",
          600: "#00CC7E",
          700: "#00995E",
          800: "#00663F",
          900: "#00331F",
        },
      },
      fontFamily: {
        // Wired up to next/font CSS variables defined in app/layout.tsx.
        // Fallbacks ensure the page still looks correct without the variables.
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        widest: "0.2em",
      },
      boxShadow: {
        // Soft radar-green glow used on hover for primary CTAs and buttons.
        glow: "0 0 24px -4px rgb(0 255 157 / 0.45), inset 0 0 0 1px rgb(0 255 157 / 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    // Custom utility for the grid-line background texture used site-wide.
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-grid": {
          "background-image":
            "linear-gradient(to right, rgb(39 39 42 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(39 39 42 / 0.7) 1px, transparent 1px)",
          "background-size": "60px 60px",
        },
      });
    }),
  ],
};

export default config;
