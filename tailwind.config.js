/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "sm-banner":
          'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true")',
        banner:
          'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header.png?raw=true")',

        "md-glasses":
          'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-md.png?raw=true")',
        "sm-glasses":
          'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true")',
        glasses:
          'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg.png?raw=true")',
      },

      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
          },
        ],
      },

      colors: {
        bgc: "#FCF3F1",
        main: "#AA0601",
        "main-dark": "#650300",
      },

      fontFamily: {
        sans: ["Roboto", "Noto Sans TC", "sans-serif"],
        Roboto: ["Roboto"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "14px",
          md: "2.25rem",
          lg: "3.25rem",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
