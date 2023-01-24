
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend:{
      colors:{
      'darkbg': '#0d1117',
      'lightdark': '#161b22'
      }
    },
    flexBasis: {
      '25': '25%',
      '33': '33.33%',
      '48': '48.7%',
      'full': '100%'
    },
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
      '51': '16rem',
      '52': '17.35rem',
      '55': '21rem',
      'lg': '58rem',
    },
    minHeight: {
      '40': '10rem',
      'md': '35rem',
      '16': '4rem'
    },
    maxHeight: {
      '40': '10rem',
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
    },
    require("@plaiceholder/tailwindcss")
  ],
}