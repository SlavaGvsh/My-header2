$(document).ready(function () {
  $(".nav__link").click(function (event) {
    $(".sub-menu__list").slideUp("");
    $(this).next(".sub-menu__list").toggle("");
    //  $('body').toggleClass('lock');
  });
});
