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

/*-------Mask phone number------------------------------------*/

const element = document.getElementById('phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);

/*-------Hiding header------------------------------------*/


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-122px";
  }
  prevScrollpos = currentScrollPos;
}