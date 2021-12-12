const { height } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '425px',
      ...defaultTheme.screens,
    },
    minWidth: {

      '40': '10rem',
      '50': '15rem'
    },
    maxWidth: {

      '40': '10rem',
      '50': '15rem',
      'lg': '58rem',


    },
    minHeight: {
      '40': '10rem',
      'md': '35rem'
    },
    maxHeight: {

      'md': '35rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#e0e6ed',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}
