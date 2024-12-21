/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          base: "#2D3648",
        },
      },
      maxWidth: {
        360: "1440px",
      },
      spacing: {
        15: "60px",
        25: "100px",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "600px",
        md: "720px",
        lg: "900px",
        gl: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    plugins: [],
  },
};
