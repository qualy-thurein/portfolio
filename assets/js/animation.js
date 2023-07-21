/*===========================================================*/
function fadeAnime() {
  //ãµã‚ã£
  $('.fadeInTrigger').each(function () { //fadeInTriggerã¨ã„ã†ã‚¯ãƒ©ã‚¹åãŒ
    var elemPos = $(this).offset().top - 50//è¦ç´ ã‚ˆã‚Šã€50pxä¸Šã®
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn');// ç”»é¢å†…ã«å…¥ã£ãŸã‚‰fadeInã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’è¿½è¨˜
    } else {
      $(this).removeClass('fadeIn');// ç”»é¢å¤–ã«å‡ºãŸã‚‰fadeInã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’å¤–ã™
    }
  });

  $('.fadeUpTrigger').each(function () { //fadeUpTriggerã¨ã„ã†ã‚¯ãƒ©ã‚¹åãŒ
    var elemPos = $(this).offset().top - 50;//è¦ç´ ã‚ˆã‚Šã€50pxä¸Šã®
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// ç”»é¢å†…ã«å…¥ã£ãŸã‚‰fadeUpã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’è¿½è¨˜
    } else {
      $(this).removeClass('fadeUp');// ç”»é¢å¤–ã«å‡ºãŸã‚‰fadeUpã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’å¤–ã™
    }
  });

  $('.fadeDownTrigger').each(function () { //fadeDownTriggerã¨ã„ã†ã‚¯ãƒ©ã‚¹åãŒ
    var elemPos = $(this).offset().top - 50;//è¦ç´ ã‚ˆã‚Šã€50pxä¸Šã®
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeDown');// ç”»é¢å†…ã«å…¥ã£ãŸã‚‰fadeDownã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’è¿½è¨˜
    } else {
      $(this).removeClass('fadeDown');// ç”»é¢å¤–ã«å‡ºãŸã‚‰fadeDownã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’å¤–ã™
    }
  });

  $('.fadeLeftTrigger').each(function () { //fadeDownTriggerã¨ã„ã†ã‚¯ãƒ©ã‚¹åãŒ
    var elemPos = $(this).offset().top - 50;//è¦ç´ ã‚ˆã‚Šã€50pxä¸Šã®
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeLeft');// ç”»é¢å†…ã«å…¥ã£ãŸã‚‰fadeDownã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’è¿½è¨˜
    } else {
      $(this).removeClass('fadeLeft');// ç”»é¢å¤–ã«å‡ºãŸã‚‰fadeDownã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’å¤–ã™
    }
  });

  // ã±ãŸã£
  $('.flipLeftTopTrigger').each(function () { //flipLeftTopTriggerã¨ã„ã†ã‚¯ãƒ©ã‚¹åãŒ
    var elemPos = $(this).offset().top - 50;//è¦ç´ ã‚ˆã‚Šã€50pxä¸Šã®
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('flipLeftTop');// ç”»é¢å†…ã«å…¥ã£ãŸã‚‰flipLeftTopã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’è¿½è¨˜
    } else {
      $(this).removeClass('flipLeftTop');// ç”»é¢å¤–ã«å‡ºãŸã‚‰flipLeftTopã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’å¤–ã™
    }
  });

  // ã¶ã‚ã£ã€ã½ã‚“ã£
  $('.zoomInTrigger').each(function () { //zoomInTriggerã¨ã„ã†ã‚¯ãƒ©ã‚¹åãŒ
    var elemPos = $(this).offset().top - 50;//è¦ç´ ã‚ˆã‚Šã€50pxä¸Šã®
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('zoomIn');// ç”»é¢å†…ã«å…¥ã£ãŸã‚‰zoomInã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’è¿½è¨˜
    } else {
      $(this).removeClass('zoomIn');// ç”»é¢å¤–ã«å‡ºãŸã‚‰zoomInã¨ã„ã†ã‚¯ãƒ©ã‚¹åã‚’å¤–ã™
    }
  });
  //txt-leftanime
  $('.leftAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    } else {
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
  });

  //topself
  $('.selfTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('self');
    } else {
      $(this).removeClass('self');
    }
  });
}
$(window).scroll(function () {
  fadeAnime();
});

$(document).ready(function () {
  var winWidth = $(window).width();
  if (winWidth > 768) {
    $('.slider .col3').addClass('flipLeftTopTrigger');
    $('.slider .flipLeftTopTrigger').addClass('flipLeftTop');
  }
  else {
    $('.slider .col3').removeClass('flipLeftTopTrigger');
    $('.slider .flipLeftTopTrigger').removeClass('flipLeftTop');
    $('.slider .flipLeftTopTrigger').css({ 'opacity': '1' });
  }
});
  /*===========================================================*/