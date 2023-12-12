/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'blue': '#3E065F',
        'white':'#FFFFFF',
        'purple':'#f8f4ff'
      },
      fontFamily:{
        'filson':"Filson Soft W03 Regular"
      }
    },
  },
  plugins: [],
}

