import forms from "@tailwindcss/forms"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        anuphan: ['Anuphan', 'san-serif']
      },
      colors: {
       customOrange: '#DE6412',
       customtealblue: '#08699F'

      }, 
      screens:{        
        'ipad-pro': '1024px',
        'large-screen': '1366px',
      }
    },
  },
  plugins: [forms],
}

