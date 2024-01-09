/* eslint-disable no-undef */
// tailwind.config.js
module.exports = {
  content: [
    "./path/to/your/html/**/*.html",
    "./path/to/your/templates/**/*.js",
  ],

  darkMode: "media",
  theme: {
    extend: {
      colors: {
        // 'colors' object is required here
        "custom-green": "#7a9280", // First custom color
        "custom-beige": "#f2d499", // Second custom color
        "custom-orange": "#bc756a",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
