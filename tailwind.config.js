/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-bright-blue": "#3a7bfd",
      "primary-check-background-first": "#57ddff",
      "primary-check-background-second": "#c058f3",
      "l-very-light-gray": "#fafafa",
      "l-very-light-grayish-blue": "#e4e5f1",
      "l-light-grayish-blue": "#d2d3db",
      "l-dark-grayish-blue": "#9394a5",
      "l-very-dark-grayish-blue": "#484b6a",
      "d-very-dark-blue": "#161722",
      "d-dark-desaturated-blue": "#25273c",
      "d-light-grayish-blue": "#cacde8",
      "d-light-grayish-blue-hover": "#e4e5f1",
      "d-dark-grayish-blue": "#777a92",
      "d-very-dark-grayish-blue-first": "#4d5066",
      "d-very-dark-grayish-blue-second": "#393a4c",
    },
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
      backgroundImage: {
        "bg-mobile-light": "url('./assets/images/bg-mobile-light.jpg')",
        "bg-desktop-light": "url('./assets/images/bg-desktop-light.jpg')",
        "bg-mobile-dark": "url('./assets/images/bg-mobile-dark.jpg')",
        "bg-desktop-dark": "url('./assets/images/bg-desktop-dark.jpg')",
        "bg-check-icon": "url('./assets/images/icon-check.svg')",
      },
    },
  },
  plugins: [],
};
