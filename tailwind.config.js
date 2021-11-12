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
        tertiary: '#686868'
      },
      fontFamily: {
        'body': ['Open Sans', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
