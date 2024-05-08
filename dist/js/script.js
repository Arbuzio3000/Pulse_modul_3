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
$(function(){
	const slider = tns({
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
	
	
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	
	
	function toggleSlide(item){
		$(item).each(function(i){
			$(this).on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		})
	}
	
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
	
	
	//Модальные окна
	
	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn();
	})
	
	$('.button_mini').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		})
	})
	
	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut();
	})
	
	function validateForm(form){
		$(form).validate({
			rules:{
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email:{
				required: true,
				email: true
				}
			},
			messages: {
				name:{
					required: "Пожалуйста введите свое имя",
					  minlength: jQuery.validator.format("Введите мин. {0} символа")
				},
				phone: "Пожалуйста введите свой телефон",
				email: {
					required:"Пожалуйста введите свою почту",
					  email: "Ваш email должен быть в формате name@domain.com"
				}
			  }
		});
	}
	
	validateForm('#consultation-form');
	validateForm('#order form');
	validateForm('#consultation form');
	
	$('input[name=phone]').mask("+7 (999) 999-99-99");
	
	$('form').submit(function(e) {
		e.preventDefault();
	
		if(!$(this).valid()){
			return;
		}
	
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
	
			$('form').trigger('reset');
		});
		return false;
	});
	
	
	//Smooth scroll and pageup
	
	$(window).scroll(function(){
		if($(this).scrollTop()>1600){
			$('.pageup').fadeIn();
		} else{
			$('.pageup').fadeOut();
		}
	});
	
	$("a[href^='#']").click(function(){
		const _href = $(this).attr=("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init();
});
