/* ******************
CUSTOM SCRIPTS
******************* */

$(document).ready(function () {

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

  // FancyBox
  $(".fancybox").fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',

    helpers : {
      title : {
        type : 'inside'
      }
    }
  });

});