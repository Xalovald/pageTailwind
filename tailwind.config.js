const defaultTheme = require('tailwindcss/defaultTheme');
const { RuntimeGlobals } = require('webpack');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        "lighter_gray": "#23252b",
        "orange_crunchyroll": "#f47521",
        "white": "#FFFFFF",
        "light_grey": "#DADADA",
        "light_black": "#141519"
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        'Lato': ['Lato', 'Helvetica Neue', 'helvetica', 'sans-serif']
      },
      screens: {
        xxl: '1410px',
      },
      height: {
        '15': '3.75rem',
        '82': '22.4rem',
        '98': '39.8rem'
      },
      width:{
        '15': '3.75rem',
        '21': '5.6rem',
        '41': '10.4rem',
        '97': '31.25rem'
      },
      backgroundImage:{
      },
      boxShadow: {
        'inner_top_black': 'inset 0 11px 8px -11px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
