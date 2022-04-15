(function() {

  const [navbar] = document.getElementsByClassName("navbar__items");

  const [hamburger] = document.getElementsByClassName("hamburger");
  hamburger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navbar.classList.toggle("show")
  }
})()