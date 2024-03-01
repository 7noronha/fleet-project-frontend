/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      // eslint-disable-next-line no-undef
      colors: require("@inovaetech/components-react/colors"),
    },
  },
  plugins: [],
}

