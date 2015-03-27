$(document).ready(function(){
    // $(".").on("mouseenter", ".work-container", function(){						
    //     $(this).find('.overlay').fadeIn(300);
    // }).on("mouseleave", ".work-container", function(){	
    //     $(this).find('.overlay').stop().fadeOut(300);
    // })	

	$('#btn-scroll').click(function(e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: $('.hero').outerHeight() - $('header').outerHeight()}, 800);
	})
	
});
