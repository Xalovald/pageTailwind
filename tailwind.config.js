const defaultTheme = require('tailwindcss/defaultTheme');
const { RuntimeGlobals } = require('webpack');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        "lighter_gray": "#23252b",
        "orange_crunchyroll": "#f47521",
        "light_grey": "#DADADA",
        "light_black": "#141519",
        "primary_blue": "#269495",
        "dark_grey": "#42423E",
        "op_grey": "#A0A0A0"
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
        'OrangeToYellow': 'linear-gradient(to right, rgba(239,67,35,1), rgba(250,184,24,1))',
        'BlackToBlue': 'linear-gradient(180deg, rgba(42, 189, 187, 0) 0%, rgba(0, 0, 0, 0.8) 89.58%, #000000 100%);'
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
