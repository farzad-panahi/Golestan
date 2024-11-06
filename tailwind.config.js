/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.html"],
  // darkMode: 'media',
  darkMode: 'class',
  
  theme: {
    extend: {
      screens:{
        "mobile":"340px",
        "desktop" : "1000px",
      }
    },
  },
  plugins: [],
}


