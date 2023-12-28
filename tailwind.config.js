/* eslint-disable no-undef */
// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // 'colors' object is required here
        "custom-green": "#7a9280", // First custom color
        "custom-beige": "#f2d499", // Second custom color
      },
    },
  },
  variants: {},
  plugins: [],
};
