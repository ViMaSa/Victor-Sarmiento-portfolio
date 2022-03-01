const animateIcon = () => {
  $('.menu-icon').toggleClass("change");
}

const animateMenu = () => {
  const $menu = $('#menu-list-container')
  if($menu.hasClass('hide')) {
    $menu.addClass('show').removeClass('hide');
  }
  else {
    $menu.addClass('hide').removeClass('show');
  }
}

$('.menu-icon').on("click", animateIcon);
$('.menu-icon').on("click", animateMenu);
