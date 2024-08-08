
// Back To Top Button

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.backtotopbutton').fadeIn(100);
	} else {
		$('.backtotopbutton').fadeOut(100);
	}
});
$('.backtotopbutton').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 100);
	return false;
});