/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E435B",
        secondary: "#E9B585",
        tertiary: "#FDE4D2",
        alt: "#c2752e"
      },
      // screens: {
      //   'desktop': '1200px',
      // }
    },
  },
  plugins: [],
})

