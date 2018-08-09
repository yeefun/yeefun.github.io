$(".clothes-card__img--r3").click(function() {
  $(".home").hide();
  $(".product").show(function() {
    $(this).css("display", "inline-grid");
  });
});

$(".product .logo, .fa-arrow-left").click(function() {
  $(".product").hide();
  $(".home").show(function() {
    $(this).css("display", "inline-grid");
  });
});