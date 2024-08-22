/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'heavy': '0px 10px 20px rgba(0, 0, 0, 0.35), 0px 6px 6px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
