const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        "dark_orange": "#E7C169",
        "brown": "#836110",
        "dark_red": "#E3473B",
        "light_grey": "#E8E8E8",
        "darker_grey": "#171717",
        "lighter_grey": "#D6D7D8",
        "dark_grey": "#B9B9BA",
        "light_black": "#090909"
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        'FontAwesome': ['FontAwesome'],
        'Geomanist': ['Geomanist', 'sans-serif'],
        'Asap': ['Asap', 'sans-serif'],
        'Geomanist_medium': ['Geomanist_medium', 'sans-serif']
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
        'slider': "url('/static/wakanime/637826068437684187Unification-Slide-Main_Waka-CR_1620x350_FR.jpg')",
        'mini_slider': "url('/static/wakanime/637826068438465635Unification-Thumbnail_Waka-CR_140x74.jpg')",
        'mini_cta': "url('/static/wakanime/cta-homepage-free-trial.png')"
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
