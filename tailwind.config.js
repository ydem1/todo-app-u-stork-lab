/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          base: "#fff",
          blue: "#EDF0F7",
        },
        blue: {
          base: "#2D3648",
          light: "#717D96",
          soft: "#E2E7F0",
        },
      },
      maxWidth: {
        160: "640px",
        360: "1440px",
      },
      minWidth: {
        28.75: "115px",
        62.5: "250px",
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
