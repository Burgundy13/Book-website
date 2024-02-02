const navbar = document.querySelector('#navbar');
let scrolled = false;

//Navigation

window.onscroll = function () {
	if (window.pageYOffset > 100) {
		navbar.classList.remove('top');
		if (!scrolled) {
			navbar.style.transform = 'translateY(-70px)';
		}
		setTimeout(function () {
			navbar.style.transform = 'translateY(0)';
			scrolled = true;
		}, 500);
	} else {
		navbar.classList.add('top');
		scrolled = false;
	}
};

// Scroll

$(document).ready(function () {
	// Add smooth scrolling to all links
	$('#navbar a,.btn').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - 70,
				},
				800
			);
		} // End if
	});
});
