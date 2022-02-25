const transitionHamburger = () => {
  $('.hamburger').toggleClass("change");
}

$('.hamburger').on("click", transitionHamburger);