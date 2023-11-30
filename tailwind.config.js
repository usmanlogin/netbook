/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      'primary': '#217BF4',
      'white': '#fff',
      'grey': '#686868',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

