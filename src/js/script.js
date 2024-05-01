// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1300,
//         autoplay: true,
//         autoplayspeed: 4000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/leftArrow.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/rightArrow.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 1,
//                   infinite: true,
//                   dots: true,
//                   arrows: false
//                 }
//               },
//               {
//                 breakpoint: 600,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2
//                 }
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               }]
//       });
//   });

var slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
    300: {
      autoplay: true,
      items: 1
    }, 
    700: {
      gutter: 150,
      items: 2,
      autoplay: false,
    },
    991: {
      items: 1
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});