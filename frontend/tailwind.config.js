/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'primary-color': '#d3e2ec',
    // },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}

