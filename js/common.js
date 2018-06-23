var main = function() {

	var location = document.location.href;
	var current_year = new Date();
	var i = 0;
	var review = document.getElementsByClassName("review");

	// if (location.indexOf("reg") != -1 || location.indexOf("konf") != -1) {
	// 	$("header").css("min-height", "400px");
	// }
	
	$(".user_input").focus(function() {
		$(this).parent().addClass("focus");
	}).blur(function() {
		if ($(this).val() === "") {
			$(this).parent().removeClass("focus");
		}
	});
	
	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 0) {
			if ($(window).width() > 1000) {
				$("nav").css({
				// "background-color": "rgba(0, 0, 0, 0.85)",
				"height": "50px",
				"padding-top": "5px",
				"padding-bottom": "10px"
				});
			}
			$(".top").fadeIn();
			$(".popup").css("top", $(window).scrollTop()+100);
		}
		else {
			if ($(window).width() > 1000) {
				$("nav").css({
					// "background-color": "rgba(0, 0, 0, 0.5)",
					"height": "80px",
					"padding-top": "20px",
					"padding-bottom": "0"
				});
			}
			$(".top").fadeOut();
		}
	}).scroll();

	if ($(window).width() < 1000) {
		$("nav").css({
			// "background-color": "rgba(0, 0, 0, 1)",
			"height": "50px",
		});
	}

	$("a[href^='#']").click(function() {
		var target = $(this).attr("href");
		$("html, body").animate({scrollTop: $(target).offset().top}, 800);
		if ($(window).width() < 1000) {
			$(".nav_menu").slideToggle(function() {
				$(".menu_btn .fa").removeClass("fa-times");
				$(".menu_btn .fa").addClass("fa-bars");
			});
		}
		document.location.href = target;
		return false;
	});
	
	$(".current_year").text(current_year.getFullYear());

	$(".prev").on("click", function(){
		review[i].classList.remove("show");
		i--;
		if (i < 0) {
			i = review.length-1;
		}
		review[i].classList.add("show");
	});

	$(".next").on("click", function(){
		review[i].classList.remove("show");
		i++;
		if (i > review.length-1) {
			i = 0;
		}
		review[i].classList.add("show");
	});


	$(".menu_btn").on("click", function() {
		if ($(".nav_menu").css("display") == "none") {
			$(".nav_menu").slideToggle(function() {
				$(".menu_btn .fa").removeClass("fa-bars");
				$(".menu_btn .fa").addClass("fa-times");
				}
			);

		}
		else {
			$(".nav_menu").slideToggle(function() {
				$(".menu_btn .fa").removeClass("fa-times");
				$(".menu_btn .fa").addClass("fa-bars");
				}
			);
		}
	});

	$(".hidden_phone .show_phone").on("click", function() {
		$(this).fadeOut();
	});

	$(".top").on("click", function() {
		$("html, body").animate({scrollTop: 0}, 800);
		return false;
	});

	$(".desktop_callback_btn").on("click", function() {
		$(".bgpopup").fadeIn();
		$(".popup").fadeIn();
	});

	$(".mobile_callback_btn").on("click", function() {
		$(".bgpopup").fadeIn();
		$(".popup").fadeIn();
	});

	$(".leave_application").on("click", function() {
		$(".bgpopup").fadeIn();
		$(".popup").fadeIn();
	});

	$(".bgpopup").on("click", function() {
		$(this).fadeOut();
		$(".popup").fadeOut();
	});

	$(".popup .fa-times").on("click", function() {
		$(".bgpopup").fadeOut();
		$(".popup").fadeOut();
	});

	$(".callback_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../callback_form.php",
			data: $("form").serialize()
		}).done(function() {
			$(".callback_form input[type='text']").val("");
			$(".callback_msg").css("opacity", "1");
			setTimeout(function() {
				$(".callback_msg").css("opacity", "0");
			}, 5000)
		});
		return false;
	});

	$(".simple_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../simple_form.php",
			data: $("form").serialize()
		}).done(function() {
			$(".simple_form input[type='text']").val("");
			$(".simple_form select").val("").change();
			$(".simple_form .input_box").removeClass("focus");
			$(".s_form_msg").css("opacity", "1");
			setTimeout(function() {
				$(".s_form_msg").css("opacity", "0");
			}, 5000)
		});
		return false;
	});

	$(".full_form").submit(function() {
		if ($("#agree").prop("checked")) {
			$(".not_agree").css("opacity", "0");
			$.ajax({
				type: "POST",
				url: "../full_form.php",
				data: $("form").serialize()
			}).done(function() {
				$(".full_form input[type='text']").val("");
				$(".f_form_msg").css("opacity", "1");
				setTimeout(function() {
					$(".f_form_msg").css("opacity", "0");
				}, 5000)
			});
		return false;
		}
		else {
			$(".not_agree").css("opacity", "1");
			return false;
		}		
		
	});
}
$(document).ready(main);