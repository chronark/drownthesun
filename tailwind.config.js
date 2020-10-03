const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: {
    layers: ["base", "components", "utilities"],
    content: ["./**/*.tsx", "./**/*.mdx"],
  },
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
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
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}