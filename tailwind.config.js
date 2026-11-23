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
        // Deep Charcoal & Obsidian base
        charcoal: {
          DEFAULT: "#161616",
          50: "#f7f7f7",
          100: "#e5e5e5",
          200: "#cccccc",
          300: "#999999",
          400: "#717171",
          500: "#505050",
          600: "#343434",
          700: "#242424",
          800: "#1a1a1a",
          900: "#121212",
          950: "#0b0b0b",
        },
        // Warm Ivory & Soft Cream
        ivory: {
          DEFAULT: "#FAF7F2",
          50: "#FFFFFF",
          100: "#FCFAF7",
          200: "#FAF7F2",
          300: "#F2EBE0",
          400: "#E6DBCB",
          500: "#D4C5B0",
          600: "#B8A388",
          700: "#967E62",
          800: "#755F46",
          900: "#564431",
        },
        // Espresso Brown
        espresso: {
          DEFAULT: "#261E1A",
          50: "#F5F2EF",
          100: "#E8E1DC",
          200: "#D3C5BC",
          300: "#B8A395",
          400: "#8C7363",
          500: "#634E41",
          600: "#4A392F",
          700: "#362A23",
          800: "#261E1A",
          900: "#191310",
        },
        // Muted Bronze
        bronze: {
          DEFAULT: "#B88E5D",
          50: "#FBF7F2",
          100: "#F4EDE2",
          200: "#E7D8C2",
          300: "#D6BF9E",
          400: "#C7A67D",
          500: "#B88E5D",
          600: "#9E7345",
          700: "#7E5832",
          800: "#5F4124",
          900: "#432C17",
        },
        // Champagne Gold
        champagne: {
          DEFAULT: "#E5CCA0",
          50: "#FDFBF7",
          100: "#FAF5EC",
          200: "#F4EBD9",
          300: "#EDDFC4",
          400: "#E5CCA0",
          500: "#D4B47C",
          600: "#B89456",
          700: "#947239",
          800: "#705325",
          900: "#4D3716",
        },
        // Soft Taupe
        taupe: {
          DEFAULT: "#9E958C",
          300: "#D2CCC4",
          400: "#B5ACA2",
          500: "#9E958C",
          600: "#7E756C",
          700: "#5F574E",
        },
        // Restrained Terracotta
        terracotta: {
          DEFAULT: "#BA5D44",
          400: "#CF7258",
          500: "#BA5D44",
          600: "#9F4731",
          700: "#7F3421",
        },
        // Legacy alias for compatibility with existing classes
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FFFFFF",
          100: "#FAF7F2",
          200: "#F2EBE0",
          300: "#E6DBCB",
          400: "#D4C5B0",
          500: "#B8A388",
          600: "#967E62",
          700: "#755F46",
          800: "#564431",
          900: "#3A2E20",
        },
        gold: {
          DEFAULT: "#B88E5D",
          50: "#FBF7F2",
          100: "#F4EDE2",
          200: "#E7D8C2",
          300: "#D6BF9E",
          400: "#C7A67D",
          500: "#B88E5D",
          600: "#9E7345",
          700: "#7E5832",
          800: "#5F4124",
          900: "#432C17",
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
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to bottom, rgba(11,11,11,0.4) 0%, rgba(11,11,11,0.85) 100%)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
