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

const submitInput = () => {
  const contactInput = {};
  const $firstName = $('#first-name-input');
  const $lastName = $('#last-name-input');
  const $email = $('#email-input');
  const $subject = $('#inquiry-input');

  // Save values to obj to return if we had a backend
  contactInput.firstName = $firstName.val();
  contactInput.lastName = $lastName.val();
  contactInput.email = $email.val();
  contactInput.subject = $subject.val();

  // Instead just use dummy alert user of email being sent
  alert(`Thank you ${contactInput.firstName} ${contactInput.lastName}. Your email about ${contactInput.subject} has been sent!`);

  // Clear values
  $firstName.val('');
  $lastName.val('');
  $email.val('');
  $subject.val('');
}

$('.menu-icon').on("click", animateIcon);
$('.menu-icon').on("click", animateMenu);
$('#form-submit-button').on("click", submitInput);
