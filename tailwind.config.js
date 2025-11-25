/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#707070",
        MainbgColor: "#10443E",
        MaintTxtColors: "#edb970",
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
