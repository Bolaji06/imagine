/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'hero-image': "url('/images/image1.svg')"
    },
  },
  fontFamily: {
    nunito: ['Nunito', 'sans-serif']
  },
  plugins: [],
}

//C:\Users\jc\Desktop\imagine\src\images\image1.svg