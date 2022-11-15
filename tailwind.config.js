/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        "sm" : "380px"
      }
    },
      fontFamily:{
        mont:['Montserrat Alternates', 'sans-serif']
      }
  },
  plugins: [],
}
