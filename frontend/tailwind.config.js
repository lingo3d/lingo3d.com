/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages_components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-[rgba(0,0,0,0.5)]',
    'backdrop-blur-xl'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
