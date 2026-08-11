/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '375px',
        'xs': '480px',
        '3xl': '1920px',
        '4xl': '2560px',
        'uw': '3440px',
      },
      fontSize: {
        'xs': ['clamp(0.7rem, 1vw + 0.4rem, 0.75rem)', { lineHeight: '1rem' }],
        'sm': ['clamp(0.8rem, 1vw + 0.5rem, 0.875rem)', { lineHeight: '1.25rem' }],
        'base': ['clamp(0.9rem, 1.5vw + 0.5rem, 1rem)', { lineHeight: '1.5rem' }],
        'lg': ['clamp(1rem, 2vw + 0.5rem, 1.125rem)', { lineHeight: '1.75rem' }],
        'xl': ['clamp(1.125rem, 2.5vw + 0.5rem, 1.25rem)', { lineHeight: '1.75rem' }],
        '2xl': ['clamp(1.25rem, 3vw + 0.5rem, 1.5rem)', { lineHeight: '2rem' }],
        '3xl': ['clamp(1.5rem, 4vw + 0.5rem, 1.875rem)', { lineHeight: '2.25rem' }],
        '4xl': ['clamp(1.75rem, 5vw + 0.5rem, 2.25rem)', { lineHeight: '2.5rem' }],
        '5xl': ['clamp(2.25rem, 6vw + 0.5rem, 3rem)', { lineHeight: '1' }],
        '6xl': ['clamp(2.75rem, 7vw + 0.5rem, 3.75rem)', { lineHeight: '1' }],
        '7xl': ['clamp(3.25rem, 8vw + 0.5rem, 4.5rem)', { lineHeight: '1' }],
        '8xl': ['clamp(3.75rem, 9vw + 0.5rem, 6rem)', { lineHeight: '1' }],
        '9xl': ['clamp(4.25rem, 10vw + 0.5rem, 8rem)', { lineHeight: '1' }],
      },
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
