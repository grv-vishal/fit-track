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

     keyframes: {
        slideInL: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutL: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideInR:{
           '0%': { transform: 'translateX(-100%)' },
           '100%': { transform: 'translateX(0)' },
        },
        slideOutR:{
           '0%': { transform: 'translateX(0)' },
           '100%': { transform: 'translateX(-100%)' },
        },
      },

      animation: {
        slideInL: 'slideInL 0.5 ease-in-out',
        slideOutL: 'slideOutL 0.5s ease-in-out',
        slideInR:'slideInR 0.5s ease-in-out',
        slideOutR:'slideInR 0.5s ease-in-out',
      },
    },
   },
  plugins: [],
};