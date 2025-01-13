/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";
// const defaultTheme = require("tailwindcss/defaultTheme");
// const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",  // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}"  // Include all JS, JSX, TS, and TSX files inside the src folder
  ],
  darkMode: "class",
  safelist: ["isToggled"],
  theme: {
    extend : {
      colors:{
        neon : "#BBFE69", 
        mattBlack : "#1F1F1F", 
        leadGrey : "#E3E4E9", 
        lightgrey : "#f5f5f5"
      }, 
      fontFamily: {
        "Fira-code": "'Fira Code'",
        "open-sans" : "Open Sans"
      },
    }, 
    screens: {
      xl:"1280px",
      lg:"1024px",
      md:"768px",
      sm:"640px",
      phn:"420px",
      sphn:"350px",
    },
      
  },

  plugins: [
  //   require('flowbite-typography'),
  //   require('flowbite/plugin')({
  //     wysiwyg: true,
  // }),
    themer({
        palette: {
            extend : "nature"
        },
        radius: "smoothest",
        background: "light",
        border: "light",
        padding:"large",
        components: {
            button: {
                rounded : "2xl"
            }
        }
    })
],
}



// screens: {
//   xxl: {
//     max: "1440px",
//   },
//   xl: {
//     max: "1280px",
//   },
//   lg: {
//     max: "1024px",
//   },
//   tab: {
//     max: "786px",
//   },
//   phn: {
//     max : "420px"
//   },
//   sphn: {
//     max : "350px"
//   }
// },
// },

// Heading - Text-2xl
// Content - Text-base

