/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html", // for tools expecting CRA-style path
    "./index.html",        // for Vite
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
