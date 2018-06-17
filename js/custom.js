// $(function(){

// 	var hf = function(){
// 		var h_header = $('header').height();
// 		var h_footer = $('footer').height();
// 		$('.content').css({
// 			'paddingTop': h_header,
// 			'paddingBottom': h_footer
// 		});
// 	}

// 	$(window).bind('load resize', hf);

// });

$(function(){

	//гамбургер
	$(".menu-toggle").click(function() {
		//Добавляет или удаляет заданный класс
		$(this).toggleClass("active")
		//в течении 600 милисекунды свернет/развернет элемент с идентификатором menu. 
		$(".menu").slideToggle(600)
	})

	//табуляция
	$(".tabs a").click(function(){
		// в .tabs родитель tab-wrap найти tab-cont и всем добавить hide
		$(this).parents(".tab-wrap").find(".tab-cont").addClass("hide");
		//вернет всех предков элемента, имеющего идентификатор tabs a 
		//найдет элементы, которые имеют общих родителей, с элементами класса tabs a
		//у найденых эл-ов удалить класс active
		$(this).parents().siblings().removeClass("active");
		//в переменную id  записать href элемент
		//вернет href у первого tabs a элемента 
		var id = $(this).attr("href");
		//удалить класс hide у первого href
		$(id).removeClass("hide");
		//добавить в tabs а родитель является ul класс active
		$(this).parent().addClass("active");
		return false
	});

//слайдер
	$(".banner-slider, .testimonial-slider").slick({
		arrows: false,
		dots: true,
	});
	$(".portfolio-slider").slick({
		dots: true,
		appendArrows: ".portfolio-slider__buttons",
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
		{
				breakpoint: 767,//на каком расширение изменяются настройки
				settings: {
					dots: false,
				}
			}
		]
	});

//слайдер
	$nav_tab_slider = $(".nav-tab-list");
		settings = {
			slidesToShow: 1,
			prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		}
		//slickSlider
	$nav_tab_slider.on("afterChange", function(event, slick, currentSlide, nextSlide){
		//ищем родителя nav-tab-list найти tab-cont и добавить класс hide
		$(this).parents(".tab-wrap").find(".tab-cont").addClass("hide");
		$(this).find(".slick-current").siblings().removeClass("active");
		//у активного эл-та (slick-current) получаем hgef
		var id = $(this).find(".slick-current a").attr("href");
		//у актинвного эл-та убрать класс hide
		$(id).removeClass("hide");
		// найти slick-current и добавить класс active
		$(this).find(".slick-current").addClass("active");
		return false
	});
	//обработчик изменения размеров окна браузера и полной загрузки
	$(window).on("resize load", function(){

		if($(window).width() > 767) {
			//проверит наличие класса slick-initialized у элемента  nav-tab-list
			if($nav_tab_slider.hasClass("slick-initialized")) {
				//если есть сам слайдер его остановить unslick
				$nav_tab_slider.slick("unslick")
			}
			return
		}
		if(!$nav_tab_slider.hasClass("slick-initialized")) {
			return $nav_tab_slider.slick(settings)
		}
	})
});

function initMap() {
    var coordinates = {lat: -37.806006, lng: 144.961291}, // Координаты центра карты 
        markerImg = 'img/marker.png', //  Иконка для маркера  
   
    // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
    	
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });

}

// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap); 

