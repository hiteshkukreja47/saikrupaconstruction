$(function () {
	new WOW().init();

	$('#work').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		// other options
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function (openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});
	
	/*****************************
			TEAM SECTION
	******************************/
	$(".team-members").owlCarousel({
		items:1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1,
				autoplayHoverPause: false,
			},
			480:{
				items:2,
			},
			768:{
				items:3,
			},
		},
	});
	
	/*****************************
			CUSTOMERS SECTION
	******************************/
	$(".customers-testimonials").owlCarousel({
		items:1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
	});
	
	$(".logo-container").owlCarousel({
		items:5,
		autoplay: true,
		smartSpeed: 1000,
		loop: true,
	});
	
	$('.counter').counterUp({
    delay: 10,
    time: 2000,
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop()>1){
			$("nav").addClass("wg-top-nav");
			$(".btn-back-to-top").fadeIn();
		}else{
			$("nav").removeClass("wg-top-nav");
			$(".btn-back-to-top").fadeOut();
		}
	});
	
	$("a.smooth-scroll").click(function(event){
		
		//prevents to perform the default operation
		event.preventDefault();
		
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top - 69,
		},1250, "easeInOutExpo");
	});
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbx6ednQE5TQY8bGllx5_1ZnuQMUiOmv-kked2Bk9mOdeX3Z3onq8Oyk-jTVhftwHLhyvQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
        msg.innerHTML = "Hey,Your Message has been sent successfully."
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()       
    })
        .catch(error => console.error('Error!', error.message))
    })

