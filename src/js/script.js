$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        autoplay: true,
        autoplayspeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/leftArrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/rightArrow.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]
      });
  });