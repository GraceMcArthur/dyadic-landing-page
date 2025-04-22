/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Fraunces"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#4A008F",
          lavender: "#A09BE7",
          mint: "#B0FF92",
          sage: "#F0F8E0",
          blush: "#FFF2F1",
        },
        "brand-primary": "#4A008F",
      },
    },
  },
  plugins: [],
};
