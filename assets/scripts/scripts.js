/* ******************
CUSTOM SCRIPTS
******************* */

$(document).ready(function () {
  
  // Background Switch on refresh/reload
  // var images = ['bg-bike.jpg', 'bg-rain.jpg'];
  // $('header').css({'background-image': 'url(assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});

  // Smooth Scroll functionality
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });

  // Scroll detect functionality
	$(window).scroll(function() {    
    $(window).scroll(function () {
        if ($(document).scrollTop() > 500) {
            $(".navigation").addClass("dark-nav");
        } else {
            $(".navigation").removeClass("dark-nav");
        }
    });
	});
});