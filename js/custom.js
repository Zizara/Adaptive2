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
//табуляция
$(function(){
	$(".tabs a").click(function(){
		$(this).parents(".tab-wrap").find(".tab-cont").addClass("hide");
		$(this).parents().siblings().removeClass("active");
		var id=$(this).attr("href");
		$(id).removeClass("hide");
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

