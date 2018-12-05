function hamburgerClicked() {
	const linksHolder = document.querySelector('.links-holder'),
				links = document.querySelectorAll('.header-links');
	if (linksHolder.style.display === "flex") {
		linksHolder.style.animation = "slideOutRight 1s";
		setTimeout(() => {
			linksHolder.style.display = "none";
		}, 1000);
	} else {
		linksHolder.style.display = "flex";
		linksHolder.style.animation = "slideInRight 1s";
		linksHolder.classList.add('menu');
		links.forEach(el => {
			el.style.color = "#fff";
		});
	}
}

$(document).ready(function() {
	$('.products-content').slick({
		dots: true,
		infinite: false,
		autoplay: true,
		prevArrow: $('.previous'),
		nextArrow: $('.next'),
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 102400,
				settings: 'unslick'
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 966,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});
