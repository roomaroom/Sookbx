// "use strict";
// (function(){
// 	var body = document.getElementById("body"),
// 	bodyClass = body.classList;
// 	//console
// 	console.log(body);
// 	console.log(body.classList);
// 	// action
// 	body.classList.add("body-addded-class");
// 	// new element
// 	var bodyText = document.createElement('h1');
// 	bodyText.innerHTML = bodyClass;
// 	body.appendChild(bodyText);
// })();
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
	});
});