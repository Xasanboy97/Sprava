$(document).ready(function(){
	$('.logo-navbar').click(function(){
		$('.header__nav').toggleClass('menu-open');
	})
	$('.nav-times').click(function(){
		$('.header__nav').removeClass('menu-open');
	})
});

var tabMenu = document.querySelectorAll('.tab-menu li');
var line = document.querySelector('.tab-menu .line');
var Allcontact = document.querySelectorAll('.content');


tabMenu.forEach(item => {

	item.addEventListener('click', function () {


		if (this.parentElement.classList.contains('active')) {
			width = this.parentElement.parentElement.offsetWidth;
			left = this.parentElement.parentElement.offsetLeft;


			this.classList.add('active');
		} else {
			width = this.offsetWidth;
			left = this.offsetLeft;

			this.classList.add('active');
		}

		line.style.width = width  + 'px';
		line.style.left = left  + 'px';

		Allcontact.forEach(content => {
			if (this.dataset.target === content.id) {
				content.classList.add('active');
			} else {
				content.classList.remove('active');
			
			}
		})
	})

})

