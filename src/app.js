(function() {

  const [navbar] = document.getElementsByClassName("navbar__items");

  const [hamburger] = document.getElementsByClassName("hamburger");
  hamburger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navbar.classList.toggle("navbar--show");
    
    const [body] = document.getElementsByTagName("body");
    body.classList.toggle("navbar--show");

    hamburger.classList.toggle("navbar--show");
  }
})()