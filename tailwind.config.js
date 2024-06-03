/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '116': '29rem',
        '144': '36rem',
        '232': '58rem',
      }
    },
  },
  plugins: [],
}

