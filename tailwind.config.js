module.exports = {
  content: [
    "./src/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-pattern-mobile":"url(/images/bg-pattern-mobile-nav.svg)",
      }
    },
    fontFamily: {
      DMSerif: ["DMSerif", "sans-serif"],
      Karla: ["Karla", "sans-serif"],
    }
  },
  plugins: [],
}
