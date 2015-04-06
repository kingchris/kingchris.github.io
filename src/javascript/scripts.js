$(document).ready(function(){
	// $(".").on("mouseenter", ".work-container", function(){						
	//     $(this).find('.overlay').fadeIn(300);
	// }).on("mouseleave", ".work-container", function(){	
	//     $(this).find('.overlay').stop().fadeOut(300);
	// })	

	
	// Hero Scroll Button
	
	$('.btn-scroll').click(function(e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: $('#hero').outerHeight() - $('header').outerHeight()}, 800);
	})
	
	
	// Adjust #hero-img size based on screen height on window resize
	
	$(function(){
		$(window).bind("resize",function(){
			if($(this).height() < 901){
				$('#hero-img').removeClass('col-lg-10 col-lg-offset-1').addClass('col-md-8 col-md-offset-2')
			}
			else{
				$('#hero-img').removeClass('col-md-8 col-md-offset-2').addClass('col-lg-10 col-lg-offset-1')
			}
		})
	})
	
});


// Adjust #hero-img size based on screen height on window load

$(window).load(function(){
	if($(this).height() < 901){
		$('#hero-img').removeClass('col-lg-10 col-lg-offset-1').addClass('col-md-8 col-md-offset-2')
	}
	else{
		$('#hero-img').removeClass('col-md-8 col-md-offset-2').addClass('col-lg-10 col-lg-offset-1')
	}
})
