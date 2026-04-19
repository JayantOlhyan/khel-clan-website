/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New TurfHub-inspired palette (Forest Green, Lime, Neutral)
        "brand-forest": "#1a4d2e",
        "brand-lime": "#c8f902",
        "brand-flame": "#ff4d00",
        "brand-neutral": "#f8f9f8",
        "brand-primary": "#1a4d2e",
        "brand-secondary": "#c8f902",
        "brand-accent": "#ff4d00",
        // Existing KhelClan tokens kept as fallback
        primary: { green: "#1D6A36" },
        energy: { gold: "#D4860A" },
        deep: { black: "#1A1A1A" },
        muted: { green: "#F2F7F4" },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        9: "2.25rem",
        13: "3.25rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
