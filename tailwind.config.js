/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        main: '#454FBF',
        white: '#E0E5F0',
        black: '#030303',
        gray: {
          500: '#0A0A0B',
          400: '#141416',
          300: '#1C1D20',
          200: '#2C2E33',
          100: '#82868F',
        },
      },
    },
  },
  plugins: [],
};
