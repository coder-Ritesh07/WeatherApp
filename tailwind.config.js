/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary":"#227B94",
        "secondary":"#C68FE6"
      },
      boxShadow:{
        "shadowbox":"0px 0px 5px 0px cyan",
        "shadow2":"0px 0px 10px 0px black"
      },
      fontSize:{
        "fontsize":"50px"
      }
    },
  },
  plugins: [],
}

