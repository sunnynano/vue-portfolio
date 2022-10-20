const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.md",
  ],

  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      inset: {
        17: "68px",
        26: "104px",
      },
      colors: {
        // "primary-light": "#F7F8FC",
        // "secondary-light": "#FFFFFF",
        // "ternary-light": "#f6f7f8",

        "primary-light": "#FBF8F1",
        "secondary-light": "#F7ECDE",
        "ternary-light": "#E9DAC1",

        // "primary-dark": "#0D2438",
        // "secondary-dark": "#102D44",
        // "ternary-dark": "#1E3851",

        "primary-dark": "#2C3333",
        "secondary-dark": "#395B64",
        "ternary-dark": "#A5C9CA",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
