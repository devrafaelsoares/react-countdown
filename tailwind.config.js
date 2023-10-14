/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,tsx,ts}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        primaryDark: "#121212",
        secondDark: "#1E1E1E",
      },
      colors: {
        primaryBlue: "#0099EE",
      },
    },
  },
  plugins: [],
}

