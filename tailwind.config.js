/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      "light-gray": "hsl(0, 0%, 98%)",
      gray: "hsl(0, 0%, 95%)",
      "very-dark": "hsl(0, 0%, 6%)",
      brown: "hsl(22, 65%, 57%)",
      orange: "hsl(21, 94%, 75%)",
      error: "hsl(0 , 65%, 49%)",
    },
    fontFamily: {
      primary: ["Manrope", "sans-serif"],
    },
    fontWeight: { bold: 700, medium: 500, regular: 400 },
    screens: { tablet: "34rem", desktop: "54rem" },
    extend: {},
  },
  plugins: [],
};
