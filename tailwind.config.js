/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['minison', 'Minison'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}
