const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: {
          50: "#f3f3f3",
          100: "#dcdcdc",
          200: "#bebebe",
          300: "#a4a4a4",
          400: "#8c8c8c",
          500: "#6f6f6f",
          600: "#565656",
          700: "#3d3d3d",
          800: "#282828",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-grotesk)"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
