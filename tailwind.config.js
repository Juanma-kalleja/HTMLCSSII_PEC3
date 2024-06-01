/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      // 'cyan-600': '#ff7849'
      primary: 'rgba(202, 13, 0, 1)',
      secondary: 'rgba(241, 160, 2, 1)',
      light: 'rgb(246, 246, 237)',
      black: 'rgba(49, 0, 8, 1)'
    },
    fontFamily: {
      sans: ['Nunito sans', 'sans-serif'],
      // 'sans': ['"Bungee Spice"', ...defaultTheme.fontFamily.sans],
      display: ['Bungee Spice', 'serif'],
    },

    extend: {
      screens: {
        'xs': '475px'
        // ...defaultTheme.screens
      },
      flexBasis: {
        '1/2': '45%',
        '1/4': '21%'
      }
    },
  },
  plugins: [],
}

