/*-------swiper------------------------------------*/


new Swiper('.reviews__slider', {
	loop: true,
	navigation: {
		nextEl: '.slider__prevBtn',
		prevEl: '.slider__nextBtn',
	},
	pagination: {
		el: '.slider__bullets',
		tipe: 'bullets',
		clickable: true,
	},
	autoHeight: true,
});


/*-------links------------------------------------*/

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
};

const activeLink = document.querySelectorAll('a[href*="#"]');
console.log(activeLink)

/*-------Main button------------------------------------*/
