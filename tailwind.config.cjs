/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#7553BE",
        },
        back: {
          100: "#2E2F3D",
        }
      }
    },
  },
  plugins: [],
}
