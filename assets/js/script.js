$(document).ready(function () {
  // Navbar Menu
  $(".menu-toggle").on("click", function () {
    $(this).toggleClass("active");
    $("#gnav").toggleClass("is-show");
    $(".scroll-top").toggleClass("for-z");
  });
  $("#gnav .menu-nav a").click(function () {
    $('#gnav').removeClass('is-show');
    $('.menu-toggle').removeClass('active');
  });

  // Scroll for show Navbar in responsive
  var startPos = 0, winScrollTop = 0;
  $(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos && winScrollTop > 100) {
      $('.header').addClass('hide');
      $('.header').removeClass('inView');
    } else {
      $('.header').removeClass('hide');
      $('.header').addClass('inView');
    }
    startPos = winScrollTop;
  });

  // Slider 
  $(".slider-sec .center").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    centerMode: true,
    autoplay: true,
    // speed: 300,
    autoplaySpeed: 2000,
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
  $(function () {
    $(window).scroll(function () {
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
    $(document).on('click', '.scroll-top', function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });


});
