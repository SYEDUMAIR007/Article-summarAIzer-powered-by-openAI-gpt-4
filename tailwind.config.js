/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceBlue:"#F0F8FF",
        gpink:"#ef1a5a",
        gblue: "#040548",
        gviolet: "#5e17eb",
        aiColor:"#a219a7",
        bodyColor:"#161252"
      },
      fontFamily:{
        satoshi:["Satoshi","sans-serif"],
        inter:["Inter","sans-serif"],
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

