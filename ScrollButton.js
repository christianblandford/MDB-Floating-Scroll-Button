//Shows or hide the floating scroll button
var scrollSpot;
$(window).scroll(function() {
	scrollSpot = $('body').scrollTop();	
	
	//show or hide the toTop button if scrolled far enough
	if(scrollSpot >= .5 * $(window).height()){
		$("#scroll-to-top").removeClass("hidden rotate");
		$("#scroll-to-top").addClass("slideInUp fadeIn");
		
	} else if(scrollSpot < 5 * $(window).height()){
		$("#scroll-to-top").removeClass("slideInUp fadeIn");
		$("#scroll-to-top").addClass("rotate");
	}
});

//a click on the floating scroll button scrolls to the top
$(document).on('click', "div#scroll-to-top", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});