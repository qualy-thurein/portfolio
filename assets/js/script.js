$(document).ready(function () {
  // Navbar Menu
  $(".menu-toggle").on("click", function () {
    $(this).toggleClass("active");
    $("#gnav").toggleClass("is-show");
    $("body").toggleClass("over_flow");
    $(".scroll-top").toggleClass("for-z");
  });
  $(".menu-link").on("click", function () {
    $('body').removeClass('over_flow');
  });
  $("#gnav .menu-nav a").click(function () {
    $("#gnav").removeClass("is-show");
    $(".menu-toggle").removeClass("active");
  });

  // Scroll for show Navbar in responsive
  var startPos = 0,
    winScrollTop = 0;
  $(window).on("scroll", function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos && winScrollTop > 100) {
      $(".header").addClass("hide");
      $(".header").removeClass("inView");
    } else {
      $(".header").removeClass("hide");
      $(".header").addClass("inView");
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
    speed: 500,
    autoplaySpeed: 2000,
    fade: false,
    variableWidth: true,
    cssEase: "linear",
  });

  /// toTop Button///
  // $(function () {
  //   $(window).scroll(function () {
  //     var winTop = $(this).scrollTop();
  //     //footer
  //     if (winTop > 250) {
  //       $(".scroll-top").fadeIn(1000);
  //     } else {
  //       $(".scroll-top").fadeOut(1000);
  //     }
  //     if (winTop + $(window).height() < $("#footer").offset().top) {
  //       $(".scroll-top").addClass("fixed");
  //     } else {
  //       $(".scroll-top").removeClass("fixed");
  //     }
  //   });
  //   $(document).on("click", ".scroll-top", function () {
  //     $("html, body").animate({ scrollTop: 0 }, 800);
  //     return false;
  //   });
  // });


  //スクロールした際の動きを関数でまとめる
function PageTopAnime() {

  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 200){//200pxスクロールしたら
    $('.scroll-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
    $('.scroll-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
  }else{//それ以外は
    if($('.scroll-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
      $('.scroll-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
      $('.scroll-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
    }
  }
  
  var wH = window.innerHeight; //画面の高さを取得
  var footerPos =  $('#footer').offset().top; //footerの位置を取得
  if(scroll+wH >= (footerPos+10)) {
    var pos = (scroll+wH) - footerPos+10 ;//スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    // $('.scroll-top').css('bottom','130px'); //.scroll-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    $('.scroll-top').css('bottom',pos); //.scroll-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  }else{//それ以外は
    if($('.scroll-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
      $('.scroll-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
    }
   
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// .scroll-topをクリックした際の設定
$('.scroll-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});
});
