module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xmd: "930px",
      lg: "1074px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkblue: "#28283D",
        cyan1: "#4D96A9",
        cyan2: "#8FE3F9",
        purple1: "#855FB1",
        purple2: "#D9B8FF",
        lightgray: "#87879D",
        hover1: "#71C0D4",
        hover2: "#B18BDD",
      },
      backgroundImage: () => ({
        mobile: "url('assets/mobile/image-footer.jpg')",
      }),
    },
  },
  plugins: [],
};
