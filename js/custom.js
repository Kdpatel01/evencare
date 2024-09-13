$(document).ready(function () {

  // slider animation start

  $("#slider").owlCarousel(
    {
      items: 1,
      loop: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 9000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      dots: false,
      nav: true,
      navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
      navElement: 'span',
    }
  );

  var owl = $('#easyprice');
  owl.owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    navElement: 'span',
    dots: false,
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });


  $("#textmonia").owlCarousel(
    {
      items: 1,
      margin: 20,
      nav: false,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      URLhashListener: true,
      animateIn: 'animate__fadeIn',
    }
  );

  new WOW().init();

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  owl.on('changed.owl.carousel', function (event) {
    new WOW().init();
  })

  // slider animation start


  // header animation start

  var lastScrollTop = 0;
  var $header = $('.sticky_header');
  var headerHeight = $header.outerHeight() + 30;

  $(window).scroll(function () {
    console.log(headerHeight);
    var windowTop = $(window).scrollTop();
    if (windowTop >= headerHeight) {
      $header.addClass('cs_gescout_sticky');
    } else {
      $header.removeClass('cs_gescout_sticky');
      $header.removeClass('cs_gescout_show');
    }

    if ($header.hasClass('cs_gescout_sticky')) {
      if (windowTop < lastScrollTop) {
        $header.addClass('cs_gescout_show');
        $('.sticky_icon').fadeIn(300);
      } else {
        $header.removeClass('cs_gescout_show');
        $('.sticky_icon').fadeOut(300);
      }
    }
    lastScrollTop = windowTop;
  });

  $('.sticky_icon').hide();
  $('.sticky_icon').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 2000)
  })

  // header animation end

  // page loader start

  setTimeout(() => {
    $('.loading').fadeOut(1000);
  }, 1000)

  // page loader end

  // section animation start
  AOS.init();
   // section animation end

  // isotop start

  var $grid = $('.gallery').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // isotop start

  // fancy-box start

  $("a.group").fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    'overlayShow': false
  });
  
  // fancy-box end

});
