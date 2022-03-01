const animateIcon = () => {
  $('.menu-icon').toggleClass("change");
}

const animateMenu = () => {
  const $menu = $('#menu-list-container');
  const $menuContainer = $('#menu-aside')
  const $nav = $('nav');

  if($menu.hasClass('hide')) {
    $menu.addClass('show').removeClass('hide');
    $menuContainer.addClass('show').removeClass('hide');
    $nav.addClass('show').removeClass('hide');
  }
  else {
    $menu.addClass('hide').removeClass('show');
    $menuContainer.addClass('hide').removeClass('show');
    $nav.removeClass('show');
  }
}

$('.menu-icon').on("click", animateIcon);
$('.menu-icon').on("click", animateMenu);
