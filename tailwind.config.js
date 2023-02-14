/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#FAF8F1',
        coconutCream: '#faf7e1',
        whiteRock: '#e7e4d0',
        foggyGray: '#ceccba',
        merlin: '#3d3c37',
        candlelight: '#fddf17',
        silver: '#c5c3c3',
        tundora: '#444444',
        saffron: '#f4bc34',
        brightSun: '#fcdc3c',
        robRoy: '#ecc860',
        gold: '#a67b00',
        americanGold: '#d3ae36',
        oldSilver: '#848482',
        quickSilver: '#a6a6a6',
        argent: '#c1c1c1'
      }
    }
  },
  plugins: [require('tailwindcss-logical')]
};
