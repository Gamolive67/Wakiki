/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: {
          DEFAULT: "#1B4332",
          light: "#2D6A4F",
          pale: "#D8F3DC"
        }
      },
      fontFamily: {
        jungle: ["'Comic Neue'", "cursive"]
      }
    },
  },
  plugins: [],
}
