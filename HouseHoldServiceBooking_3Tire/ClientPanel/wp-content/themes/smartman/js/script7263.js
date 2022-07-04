(function($) {

	

	"use strict";

	

	//Hide Loading Box (Preloader)

	function handlePreloader() {

		if($('.preloader').length){

			$('.preloader').delay(200).fadeOut(500);

		}

	}

	

	//Update Header Style and Scroll to Top

	function headerStyle() {

		if($('.main-header').length){

			var windowpos = $(window).scrollTop();

			var siteHeader = $('.main-header');

			var scrollLink = $('.scroll-to-top');

			var sticky_header = $('.main-header .sticky-header');

			if (windowpos > 100) {

				siteHeader.addClass('fixed-header');

				sticky_header.addClass("animated slideInDown");

				scrollLink.fadeIn(300);

			} else {

				siteHeader.removeClass('fixed-header');

				sticky_header.removeClass("animated slideInDown");

				scrollLink.fadeOut(300);

			}

		}

	}

	

	headerStyle();



	//Submenu Dropdown Toggle

	if($('.main-header li.dropdown ul').length){

		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		

	}



	//Mobile Nav Hide Show

	if($('.mobile-menu').length){

		

		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();

		$('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');

		$('.mobile-menu .navigation').append(mobileMenuContent);

		$('.sticky-header .navigation').append(mobileMenuContent);

		$('.mobile-menu .close-btn').on('click', function() {

			$('body').removeClass('mobile-menu-visible');

		});

		//Dropdown Button

		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {

			$(this).prev('ul').slideToggle(500);

		});

		//Menu Toggle Btn

		$('.mobile-nav-toggler').on('click', function() {

			$('body').addClass('mobile-menu-visible');

		});



		//Menu Toggle Btn

		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {

			$('body').removeClass('mobile-menu-visible');

		});

	}





	if ($('.banner-slider').length) {



		var slider = $('.banner-slider').bxSlider({

	    	pagerCustom: '#banner-pager',



	    	onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {

            console.log(currentSlideHtmlObject);

            $('.active-slide').removeClass('active-slide');

            $('.banner-slider > li').eq(currentSlideHtmlObject + 1).addClass('active-slide');

        },

        onSliderLoad: function () {

            $('.banner-slider > li').eq(1).addClass('active-slide');

        },

      	auto: true,

		pause: 7000,

  		autoControls: true,

	     // otherOption: true,

	     // anotherOption: 5,

	     // slideWidtrh: 100

	    

		});



	}



	// Single Item Carousel

	if ($('.single-item-carousel').length) {

		$('.single-item-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			singleItem:true,

			smartSpeed: 700,

			autoHeight: false,

			autoplay: true,

			autoplayTimeout:10000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				1024:{

					items:1

				},

			}

		});    		

	}



	// Services Carousel

	if ($('.services-carousel').length) {

		$('.services-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: true,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				480:{

					items:2

				},

				800:{

					items:3

				},

				1280:{

					items:4

				}

			}

		});    		

	}



	// Team Carousel

	if ($('.team-carousel').length) {

		$('.team-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: true,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				768:{

					items:2

				},

				1024:{

					items:3

				}

			}

		});    		

	}



	// Team Carousel

	if ($('.projects-carousel').length) {

		$('.projects-carousel').owlCarousel({

			loop:true,

			margin:40,

			nav:true,

			smartSpeed: 500,

			autoplay: true,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				1024:{

					items:1

				}

			}

		});    		

	}



	// Team Carousel

	if ($('.projects-carousel-two').length) {

		$('.projects-carousel-two').owlCarousel({

			loop:true,

			margin:0,

			nav:true,

			smartSpeed: 500,

			autoplay: true,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:2

				},

				800:{

					items:3

				},

				1280:{

					items:4

				}

			}

		});    		

	}



	// Team Carousel

	if ($('.testimonial-carousel').length) {

		$('.testimonial-carousel').owlCarousel({

			loop:true,

			margin:40,

			nav:true,

			smartSpeed: 500,

			autoplay: true,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				768:{

					items:1

				},

				1024:{

					items:2

				}

			}

		});    		

	}

	

	// Sponsors Carousel

	if ($('.sponsors-carousel').length) {

		$('.sponsors-carousel').owlCarousel({

			loop:true,

			margin:15,

			nav:true,

			smartSpeed: 500,

			autoplay: true,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				480:{

					items:2

				},

				600:{

					items:3

				},

				768:{

					items:4

				},

				1024:{

					items:5

				},

				1280:{

					items:6

				}

			}

		});    		

	}





	// Testimonial Carousel Two

	if ($('.testimonial-carousel-two').length && $('.thumbs-carousel').length) {



		var $sync1 = $(".testimonial-carousel-two"),

			$sync2 = $(".thumbs-carousel"),

			flag = false,

			duration = 500;



			$sync1

				.owlCarousel({

					loop:false,

					items: 1,

					margin: 5,

					nav: false,

					navText: [ '<span class="icon la la-angle-left"></span>', '<span class="icon la la-angle-right"></span>' ],

					dots: false,

					autoplay: true,

					autoplayTimeout: 5000

				})

				.on('changed.owl.carousel', function (e) {

					if (!flag) {

						flag = false;

						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);

						flag = false;

					}

				});



			$sync2

				.owlCarousel({

					loop:false,

					margin: 5,

					items: 1,

					nav: false,

					navText: [ '<span class="icon la la-arrow-circle-o-left"></span>', '<span class="icon la la-arrow-circle-o-right"></span>' ],

					dots: false,

					center: false,

					autoplay: true,

					autoplayTimeout: 5000,

					responsive: {

						0:{

				            items:1,

				            autoWidth: false

				        },

				        600:{

				            items:1,

				            autoWidth: false

				        },

				        1024:{

				            items:1,

				            autoWidth: false

				        }

				    },

				})

				

		.on('click', '.owl-item', function () {

			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

		})

		.on('changed.owl.carousel', function (e) {

			if (!flag) {

				flag = true;		

				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);

				flag = false;

			}

		});



	}



	//Progress Bar

	if($('.progress-line').length){

		$('.progress-line').appear(function(){

			var el = $(this);

			var percent = el.data('width');

			$(el).css('width',percent+'%');

		},{accY: 0});

	}

	

	//Fact Counter + Text Count

	if($('.count-box').length){

		$('.count-box').appear(function(){

	

			var $t = $(this),

				n = $t.find(".count-text").attr("data-stop"),

				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				

			if (!$t.hasClass("counted")) {

				$t.addClass("counted");

				$({

					countNum: $t.find(".count-text").text()

				}).animate({

					countNum: n

				}, {

					duration: r,

					easing: "linear",

					step: function() {

						$t.find(".count-text").text(Math.floor(this.countNum));

					},

					complete: function() {

						$t.find(".count-text").text(this.countNum);

					}

				});

			}

			

		},{accY: 0});

	}



	//Gallery Filters

	 if($('.filter-list').length){

	 	 $('.filter-list').mixItUp({});

	 }



	//Custom Seclect Box

	if($('.custom-select-box').length){

		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');

	}



	//LightBox / Fancybox

	if($('.lightbox-image').length) {

		$('.lightbox-image').fancybox({

			openEffect  : 'fade',

			closeEffect : 'fade',

			helpers : {

				media : {}

			}

		});

	}

	

	//Accordion Box

	if($('.accordion-box').length){

		$(".accordion-box").on('click', '.acc-btn', function() {

			

			var outerBox = $(this).parents('.accordion-box');

			var target = $(this).parents('.accordion');

			

			if($(this).hasClass('active')!==true){

				$(outerBox).find('.accordion .acc-btn').removeClass('active');

			}

			

			if ($(this).next('.acc-content').is(':visible')){

				return false;

			}else{

				$(this).addClass('active');

				$(outerBox).children('.accordion').removeClass('active-block');

				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);

				target.addClass('active-block');

				$(this).next('.acc-content').slideDown(300);	

			}

		});	

	}

	

	

	// Scroll to a Specific Div

	if($('.scroll-to-target').length){

		$(".scroll-to-target").on('click', function() {

			var target = $(this).attr('data-target');

		   // animate

		   $('html, body').animate({

			   scrollTop: $(target).offset().top

			 }, 1500);

	

		});

	}

	

	// Elements Animation

	if($('.wow').length){

		var wow = new WOW(

		  {

			boxClass:     'wow',      // animated element css class (default is wow)

			animateClass: 'animated', // animation css class (default is animated)

			offset:       0,          // distance to the element when triggering the animation (default is 0)

			mobile:       false,       // trigger animations on mobile devices (default is true)

			live:         true       // act on asynchronously loaded content (default is true)

		  }

		);

		wow.init();

	}





/* ==========================================================================

   When document is Scrollig, do

   ========================================================================== */

	

	$(window).on('scroll', function() {

		headerStyle();

	});

	

/* ==========================================================================

   When document is loading, do

   ========================================================================== */

	

	$(window).on('load', function() {

		handlePreloader();

	});	



})(window.jQuery);