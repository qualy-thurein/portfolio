$(document).ready(function () {
  // Navbar Menu
  $(".menu-toggle").on("click", function () {
    $(this).toggleClass("active");
    // $(".overlay").toggleClass("view");
    $(".navbar").toggleClass("is-show");
  });

  $(".slider-sec .center").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    centerMode: true,
    autoplay: false,
    speed: 300,
    fade: false,
    variableWidth: true,
    cssEase: "linear",
  });
});
