/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderBottomDashBLogo: "rgba(255, 255, 255, 0.25)",
        cardColor: "rgba(0, 0, 0, 0.5)",
        tabButton: "rgba(0, 0, 0, 0.15)",
        tabColor: "rgba(0, 0, 0, 0.4)",
        UserText: "rgba(0, 0, 0, 0.6)",
        UserBox: "rgba(0, 42, 118, 0.03)",
        InputBorderColor: "rgba(0, 0, 0, 0.25)",
        checkboxBg: "rgba(0, 42, 118, 0.15)",
        tableBoxBg: "rgba(75, 159, 71, 0.1)",
        leftArrow: "rgba(0, 0, 0, 0.18)",
        decline: "rgba(230, 82, 31, 0.1)",
        pending: "rgba(240, 177, 66, 0.1)",
        approvedUser: "rgba(0, 179, 255, 0.1)",
        analyticUser: "rgba(0, 42, 118, 0.1)",
      },
    },
    screens:{
      "sm":"640px",
      "md":"768px",
      "lg": "1024px",
      "xl":"1280px",
      "laptop":"1720px"
    }
  },
  plugins: [],
};
