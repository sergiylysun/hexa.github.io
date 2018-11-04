$(document).ready(function(){

	$('.line-img').animate({
		left: '0'
	},7000, 'linear'
	);

	$('.toggle').on('click', function(event) {
		event.preventDefault();
		$('.main-menu-box').toggle();
	});
});