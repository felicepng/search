module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: '#1C76D5',
        primary: '#282828',
        secondary: '#424242',
        tertiary: '#686868',
        header: '#F0F0F0',
      },
      fontFamily: {
        'body': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        search: '0px 4px 8px 4px rgba(224, 228, 229, 0.35)',
      },
      fontSize: {
        xxs: '9.89px',
        link: '11px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
