/* ******************
CUSTOM SCRIPTS
******************* */

$(document).ready(function () {
  
  // Background Switch on refresh/reload
  // var images = ['bg-bike1.jpg', 'bg-rain1.jpg', 'bg-clouds.jpg', 'bg-molehill.jpg', 'bg-yaletown.jpg'];
  
  // if ($(window).width() > 660) {
  //   $('header').addClass('bg-swap');
  //   $('.bg-swap').css({'background-image': 'url(assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});
  // } else {
  //   $('header').removeClass('bg-swap');
  // }


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