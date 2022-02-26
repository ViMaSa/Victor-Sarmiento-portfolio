const animateHamburger = () => {
  $('.hamburger').toggleClass("change");
}

$('.hamburger').on("click", animateHamburger);