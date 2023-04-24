/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '170': '10.62rem',
      },
      screens: {
        'max-768': {'max': '768px'},
      },
      width: {
        '300': '300px',
      },
      height: {
        '300': '300px',
      },
      maxWidth: {
        '300': '300px',
        '240': '240px',
      }
    },
    plugins: [],
  }
}
