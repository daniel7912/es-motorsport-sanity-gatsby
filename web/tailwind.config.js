const { colors, fontSize, screens } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: false,
  theme: {
    extend: {
      boxShadow: {
        red: "0 0 0 3px rgba(197, 48, 48, 0.5)",
      },
      fontSize: {
        ...fontSize,
        "4xl": "2.15rem",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gray: {
          ...colors.gray,
          "800": "#262626",
        },
        yellow: {
          ...colors.yellow,
          "400": "#F5A623",
        },
        brands: {
          facebook: "#4267B2",
          instagram: "#E1306C",
        },
      },
      opacity: {
        "10": "0.1",
        "20": "0.2",
        "95": "0.95",
      },
      screens: {
        ...screens,
        xs: "380px",
      },
    },
  },
  variants: {},
  plugins: [],
}
