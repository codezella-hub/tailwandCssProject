/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "src/*.{html,js}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        primary: "#3498db",
        secondary: "#a336f4",
        accent: "#e3342f",
        darkBackground: "#1a202c"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"], 
      },
      spacing: {
        128: "32px",
        144: "36rem",
      },   
    },
  },
  plugins: [],
}

