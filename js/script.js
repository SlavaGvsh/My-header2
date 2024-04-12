$(document).ready(function () {
  showDrop();

  $(window).resize(function () {
    showDrop();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".nav__list").length) {
      // Если клик произошел не внутри .nav__menu, скрываем все открытые дропдауны
      $("li.drop-btn").removeClass("active");
    }
  });
});

function showDrop() {
  var screenWidth = $(window).width();
  console.log(screenWidth);
  if (screenWidth < 768) {
    $(".nav__link").click(function (event) {
      $(".nav__item").not($(this).parent()).removeClass("active");
      $(this).parent("li.drop-btn").toggleClass("active");

      event.stopPropagation();
    });
  } else {
    $("li.drop-btn").removeClass("active");
  }
}
