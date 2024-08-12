/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lightc': ['Comfortaa-Light'],
        'regularc': ['Comfortaa-Regular'],
        'mediumc': ['Comfortaa-Medium'],
        'semiboldc': ['Comfortaa-SemiBold'],
        'boldc': ['Comfortaa-Bold'],
      },
      colors: {
        primar: "#212330",
        secondar: "#303343",
        font: "#BEC0C9",
        background: "#171923",
        border: "rgba(190, 192, 201, 0.2)",
        
        green1: "#3cb844",
        green2: "#1e9422",
        green3: "#006f00",

        red1: "#ff3b25",
        red2: "#d31e13",
        red3: "#a60000",

        blue1: "#026ae3",
        blue2: "#014cbd",
        blue3: "#002e97",

        yellow1: "#f3b70d",
        yellow2: "#f9db49",
        yellow3: "##ffff84",
      },
    },
  },
  plugins: [],
};