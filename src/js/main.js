$(document).ready(function(){
//tabs switch
var tabTrigger = $(".tabs").find(".tab"),
infoItem = $(".info-item");
tabTrigger.on("click", function(){
	var tabData = $(this).data("tab");
	infoItem.removeClass("active");
	tabTrigger.removeClass("active");
	$(this).addClass("active");
	$("#" + tabData).addClass("active");
	if ($(window).width() <= 992){
		$(".sookbox-info").addClass("mobile-active");
	}
});

$("#close-mobile").on("click", function(){
	$(".sookbox-info").removeClass("mobile-active");
});

//screen 2 height
function infoboxHeight(){
	if ($(window).width() >= 992){
		$(".screen-2").css({
			"height": $(".screen-2").find(".introbox").outerHeight() - 60
		})
	}
	else {
		$(".screen-2").css({
			"height": "initial"
		})
	}
};
infoboxHeight();

// waypoints
var waypoints = $('.screen-2').waypoint(function(direction) {
	$("#socials-fixed").addClass("active");
});
var waypoints = $('.screen-2').waypoint(function(direction) {
	$("#socials-fixed").removeClass("active");
}, {offset: 50});

// scroll down to
function Bert (ert){
	// console.log(ert);
	// $('html, body').animate({
		// scrollTop: $(".some").offset().top})
	};

	// Bert("wat");
	var scrollDown = $(".scroll-to");
	scrollDown.on("click", function(){
		var thisAnchor = $(this).data("scroll-to");
	$('html, body').animate({
		scrollTop: $("." + thisAnchor).offset().top
	}, 1000)

});
	$(window).on("resize", function(){
		infoboxHeight();
	});
});