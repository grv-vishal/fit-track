/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        redPink: {
          1: "#fd5455",
          2: "#fd6973",
          3: "#fedbcd",
          4: "#fbdfd3",
          5: "#eeeae9",
          6: "#fe8366",
          7: "#fe6a75",
          8: "#FC2223",
        },
        blueLight: {
          turquoise1: "#afedee",
          turquoise2: "#bdfffe",
          sky1: "#89ccff",
          sky2: "#7ec1ec",
          sky3: "#76a9c7",
          azure: "#027fff",
          royal: "#4a76fd",
        },
     },
   },
  },
  plugins: [],
}

