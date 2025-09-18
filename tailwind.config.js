/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#3396D3',
        second: '#EBCB90',
        beig: '#FFF0CE',
        gray: '#EEEEEE',
      }
    },
  },
  plugins: [],
}

