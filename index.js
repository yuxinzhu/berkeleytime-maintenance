$(document).ready(function() {
	$('#circle').fadeIn(800);

	$(".icons").hover(function() {
		$("#title").text($(this).attr("data-title"));
		// $("#circle").text($(this).attr("data-title"));
	}, function() {
		$("#title").text("yuxin zhu");
	});
});
