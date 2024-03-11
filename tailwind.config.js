import {fontFamily} from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        primary:"#6b4ff1",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        popins: ["var(--font-poppins)", ...fontFamily.serif],
        theboldfont: ["var(--font-theboldfont)", ...fontFamily.sans],
    },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        nav:'806px'
    },
    backgroundImage:{
      "gradient-card":"linear-gradient(90deg, hsla(250, 63%, 35%, 1) 0%, hsla(250, 85%, 63%, 1) 100%)",
    }
    },
  },
  plugins: [require("tailwindcss-animate")],
}