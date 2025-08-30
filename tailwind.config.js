/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A73E8',
        'secondary': '#E8F0FE',
        'dark-blue': '#172B4D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}