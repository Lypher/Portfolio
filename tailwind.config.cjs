/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        fadeOut: "fadeOut 1.5s ease-out", // Animación de desvanecimiento
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
