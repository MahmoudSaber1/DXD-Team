/* eslint-disable no-unused-expressions */
!(function ($) {
	$(document).ready(function () {
		/* ------------- Preloadere ------------*/
		$(window).on("load", function () {
			$(".preloader").fadeOut("slow");
		});

		/* ------------ Navbar Shrink ---------*/
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 90) {
				$(".navbar").addClass("navbar-shrink");
			} else {
				$(".navbar").removeClass("navbar-shrink");
			}
		});

		/* --------- Navbar Collapse -------------- */
		$(".nav-link").on("click", function () {
			$(".navbar-collapse").collapse("hide");
		});

		/* -------------- ScrollIt Call --------------- */
		$.scrollIt({
			topOffset: -50,
			scrollTime: 200,
		});

		/* ------------ Services Curoser ------------*/
		$(".about-carousel").owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},

				600: {
					items: 2,
				},

				1000: {
					items: 3,
				},
			},
		});

		/* ------------ Projects Curoser ------------*/
		// Porfolio isotope and filter
		$(window).on("load", function () {
			var portfolioIsotope = $(".projects-container").isotope({
				itemSelector: ".projects-item",
				layoutMode: "fitRows",
			});

			$("#projects-flters li").on("click", function () {
				$("#projects-flters li").removeClass("filter-active");
				$(this).addClass("filter-active");

				portfolioIsotope.isotope({
					filter: $(this).data("filter"),
				});

				aos_init();
			});

			// Initiate venobox (lightbox feature used in portofilo)
			$(document).ready(function () {
				$(".venobox").venobox();
			});
		});

		// Init AOS
		function aos_init() {
			AOS.init({
				duration: 1000,
				easing: "ease-in-out-back",
				once: true,
			});
		}
		$(window).on("load", function () {
			aos_init();
		});

		// jQuery counterUp
		$('[data-toggle="counter-up"]').counterUp({
			delay: 10,
			time: 3000,
		});

		/* ----------- Toggle Them - light and Dark ------------- */
		function toggleThem() {
			if (localStorage.getItem("DXD-theme") !== null) {
				if (localStorage.getItem("DXD-theme") === "dark") {
					$("body").addClass("dark");
				} else {
					$("body").removeClass("dark");
				}
			}
			updataIcon();
		}
		toggleThem();

		$(".toggle-them").on("click", () => {
			$("body").toggleClass("dark");
			if ($("body").hasClass("dark")) {
				localStorage.setItem("DXD-theme", "dark");
			} else {
				localStorage.setItem("DXD-theme", "light");
			}
			updataIcon();
		});

		function updataIcon() {
			if ($("body").hasClass("dark")) {
				$(".toggle-them i").removeClass("fa-moon");
				$(".toggle-them i").addClass("fa-sun");
			} else {
				$(".toggle-them i").removeClass("fa-sun");
				$(".toggle-them i").addClass("fa-moon");
			}
		}
		/*==================== SHOW SCROLL UP ====================*/
		function scrollUp() {
			const scrollUp = document.getElementById("scroll-up");
			// When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
			if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
			else scrollUp.classList.remove("show-scroll");
		}
		window.addEventListener("scroll", scrollUp);
	});
})(jQuery);
