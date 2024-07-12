/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FBF2FB',
        'secondary': '#AA0601',
        'secondary-dark': '#650300'
      },

      fontFamily: {
        w3font: ['Roboto', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

