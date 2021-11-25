$(function () {
  $('.slider__items').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 677,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  
  // let header = $('.header__inner');
  // const headerHeght = header.offsetHeight;
  // let scrollDistanse = window.scrollY;
  
  // $(window).scroll(function() {
  //   if($(this).scrollDistanse() > 1) {
  //    header.addClass('fixed');
  //    header.css({
  //     'padding': '34px 0',
  //     'transition': '.3s'
  //   });
  //   } else {
  //     header.removeClass('fixed');
  //   }
  // });

  $(document).ready(function(){
    var tempScrollTop, currentScrollTop = $(window).scrollTop();
    $(window).scroll(function(){
      currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > $('header').height()) { 
          $('body').addClass('fixed-header'); 
          if ( tempScrollTop > currentScrollTop ) { 
            $('.header__inner').addClass('show'); 
          } else {
            $('.header__inner').removeClass('show'); 
          }
        } else if(currentScrollTop < $('.header__inner').height()) { 
          $('body').removeClass('fixed-header'); 
          $('.header__inner').removeClass('show'); 
        }
          tempScrollTop = currentScrollTop; 
    });
  });


  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  })


})


