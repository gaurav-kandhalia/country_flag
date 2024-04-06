/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
screens:{
  'smm': {'min': '720px', 'max': '900px'},
},
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      boxShadow :{
     'custom':'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }
    },
  },
  plugins: [],
}

