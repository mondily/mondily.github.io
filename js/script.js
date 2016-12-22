$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

$(document).ready(function() {
       $(window).resize(function() {
          var bodyheight = $(window).height();
          $("#headline").padding-bottom(bodyheight);
       }); 
    });


(function ($) {
    $(document).ready(function(){

        //hide navbar if scroll down
        $(function () {
            $(window).scroll(function () {

                // set distance user needs to scroll before we hide, fadeIn when scroll up to top
                if ($(this).scrollTop() > 75) {
                    $('.navbar').css('background-color', 'rgba(49,49,49,0.85)');
                } else {
                    $('.navbar').css('background-color', 'rgba(49,49,49,0.8)');
                }
            });
        });

    });
}(jQuery));