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
        // Brand palette
        charcoal: {
          DEFAULT: "#1a1a1a",
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#d0d0d0",
          300: "#a0a0a0",
          400: "#707070",
          500: "#505050",
          600: "#383838",
          700: "#2a2a2a",
          800: "#1a1a1a",
          900: "#0d0d0d",
          950: "#080808",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          50: "#fdfcfa",
          100: "#faf7f2",
          200: "#f5f0e8",
          300: "#ede4d2",
          400: "#dfd3b8",
          500: "#c9b898",
          600: "#b09878",
          700: "#8f7558",
          800: "#6e5840",
          900: "#4e3e2e",
        },
        gold: {
          DEFAULT: "#c9a84c",
          50: "#fdf9ee",
          100: "#faf0d2",
          200: "#f4dfa0",
          300: "#ecc960",
          400: "#e3b236",
          500: "#c9a84c",
          600: "#b08a28",
          700: "#8a6a1f",
          800: "#6b5118",
          900: "#4e3c12",
        },
        bronze: {
          DEFAULT: "#a0724a",
          500: "#a0724a",
          600: "#8a6040",
          700: "#6e4c32",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 100%)",
      },
      screens: {
        xs: "375px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
