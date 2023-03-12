/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#00d8ff',
      'purple': '#1e40af',
      'black': '#000000',
      'white': '#ffffff',
      'green': '#4ade80',
      'pink': '#ec4899',
      'yellow': '#eab308',
    },
    fontFamily: {
      'custom': ['Cabin', 'sans-serif'],
    },
  },
  plugins: [],
}
