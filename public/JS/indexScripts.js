$(document).ready(function() {
  $("#home-button-img").on("click", function() {
    $("#home-link").addClass("active");
    $("#product-link").removeClass("active");
    $("#about-link").removeClass("active");
    $("#contact-link").removeClass("active");
    $("#navbar").removeClass("show");
  });
  $("#home-link").on("click", function() {
    $("#home-link").addClass("active");
    $("#product-link").removeClass("active");
    $("#about-link").removeClass("active");
    $("#contact-link").removeClass("active");
    $("#navbar").removeClass("show");
  });
  $("#product-link").on("click", function() {
    $("#product-link").addClass("active");
    $("#home-link").removeClass("active");
    $("#about-link").removeClass("active");
    $("#contact-link").removeClass("active");
    $("#navbar").removeClass("show");
  });
  $("#about-link").on("click", function() {
    $("#about-link").addClass("active");
    $("#home-link").removeClass("active");
    $("#product-link").removeClass("active");
    $("#contact-link").removeClass("active");
    $("#navbar").removeClass("show");
  });
  $("#contact-link").on("click", function() {
    $("#contact-link").addClass("active");
    $("#home-link").removeClass("active");
    $("#product-link").removeClass("active");
    $("#about-link").removeClass("active");
    $("#navbar").removeClass("show");
  });
  $(window).on("scroll", function() {
    $("div").each(function() {
      if($(window).scrollTop() >= $(this).offset().top - 400) {
        var id = $(this).attr("id");
        if (id == "home" || id == "product" || id == "about" || id == "contact") {
          $("#home-link").removeClass("active");
          $("#product-link").removeClass("active");
          $("#about-link").removeClass("active");
          $("#contact-link").removeClass("active");
          $("#"+id+"-link").addClass("active");
        }
      }
    });
  });
});
