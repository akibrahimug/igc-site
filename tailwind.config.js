/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d", // Charcoal black
        },
        brown: {
          100: "#f0ebe6",
          200: "#e0d1c2",
          300: "#d1b79e",
          400: "#c19d7a",
          500: "#b28356",
          600: "#8e6944",
          700: "#6b4f33",
          800: "#483522",
          900: "#241a11",
        },
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        igc: ["IgcFont", "sans-serif"],
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "80%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)" },
          "70%": { transform: "translateY(-45%)" },
          "80%": { transform: "translateY(10)" },
          // "100%": { transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-in": "slideIn 0.5s ease-out",
        "slide-in-top": "slideInTop 2s ease-out",
        fadeInUp: "fadeInUp 1s ease forwards",
      },
      transitionProperty: {
        opacityTransform: "opacity, transform",
      },
      scrollSnapType: {
        y: "y mandatory",
      },
      scrollSnapAlign: {
        start: "start",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".shadow-text": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
  variants: {
    extend: {
      scroll: ["responsive"],
      scrollSnap: ["responsive"],
    },
  },
};
