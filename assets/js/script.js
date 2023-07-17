$(document).ready(function () {
  // Navbar Menu
  $(".menu-toggle").on("click", function () {
    $(this).toggleClass("active");
    $("#gnav").toggleClass("is-show");
  });
  $("#gnav .menu-nav a").click(function () { 
    $('#gnav').removeClass('is-show');
      $('.menu-toggle').removeClass('active');
  });

  // Slider 
  $(".slider-sec .center").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    centerMode: true,
    autoplay: true,
    speed: 300,
    fade: false,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,

        }
      }
    ]
});

  /// toTop Button///
  $(function() {
    $(window).scroll(function() {
      var winTop = $(this).scrollTop();
            //footer
            if (winTop > 250) {
              $('.scroll-top').fadeIn(1000);
            } else {
              $('.scroll-top').fadeOut(1000);
            }
            if (winTop + $(window).height() < $("#footer").offset().top) {
              $(".scroll-top").addClass('fixed');
            } else {
              $(".scroll-top").removeClass('fixed');
            }

          });
    $(document).on('click', '.scroll-top', function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });

  // Scroll Reveal
  ScrollReveal().reveal('.slide-up',{
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    interval: 300,
    scale: 0.85,
    reset: true,
  });
  
});
