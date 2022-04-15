module.exports = {
  content: [
    "./src/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "dark-violet": "var(--dark-violet)",
        "grayish-blue": "hsl(216, 30%, 68%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "navbar-pattern-mobile":"url(/images/bg-pattern-mobile-nav.svg)",
        "pattern-intro-left-mobile": "url(/images/bg-pattern-intro-left-mobile.svg)",
        "pattern-intro-left-desktop": "url(/images/bg-pattern-intro-left-desktop.svg)",
        "pattern-intro-right-mobile": "url(/images/bg-pattern-intro-right-mobile.svg)",
        "pattern-intro-right-desktop": "url(/images/bg-pattern-intro-right-desktop.svg)",
        "pattern-how-we-work-desktop": "url(/images/bg-pattern-how-we-work-desktop.svg)",
        "pattern-how-we-work-mobile": "url(/images/bg-pattern-how-we-work-mobile.svg)",
        "pattern-footer-desktop": "url(/images/bg-pattern-footer-desktop.svg)",
        "pattern-footer-mobile": "url(/images/bg-pattern-footer-mobile.svg)",
      }
    },
    fontFamily: {
      DMSerif: ["DMSerif", "sans-serif"],
      Karla: ["Karla", "sans-serif"],
    }
  },
  plugins: [],
}
