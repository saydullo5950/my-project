/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        teko: "teko, 'sans-serif'"
      },
      backgroundImage: {
        mine: 'url(./images/minecraft-bg.jpg)'
      }
    },
  },
  plugins: [],
}

