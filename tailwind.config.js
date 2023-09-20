/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      hansblack: ["Black Han Sans", "sans-s-serif"],
      opensans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    extend: {
      colors: {
        nav: "#3e3e3e",
        body: "#eaeaea",
      },
      backgroundImage: {
        logo: "url('./images/nav_logo.png')",
      },
    },
  },
  plugins: [],
};
