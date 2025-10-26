/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf8f0',
          100: '#f5f0db',
          200: '#ebe0b8',
          300: '#dfc88f',
          400: '#d4af37',
          500: '#c4a52f',
          600: '#a88828',
          700: '#896c22',
          800: '#705721',
          900: '#5e481f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
