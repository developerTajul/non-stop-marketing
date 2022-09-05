/* Template Name: AdventureGene 
   Description: This is a - Travel Adventure & Tours HTML5 Template;
   Version: 1.0 
   Authot: 
   Website:
    ersion: 1.0  
	NOTE:  This is js file contents all jQuery plugins.
*/

(function ($) {
 "use strict";
    jQuery(document).ready(function($){


     

	/* ==== 02. jQuery MeanMenu Active ==== */
	   $('#menu').slicknav();
    
      

		/* ==== 05. ScrollUp ==== */
		$.scrollUp({
			scrollText: '<i class="fal fa-arrow-alt-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		}); 
	
    });

    

// ==== 11. Sticky Header ====
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 200;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
            	header.removeClass("animated cssanimation");
                header.addClass("navbar-fixed-top sticky  cssanimation animated fadeInTop");
            } else {
                header.removeClass("navbar-fixed-top sticky cssanimation  animated fadeInTop");
                header.addClass("animated cssanimation");
            }

        });
    });

        /*====  11. one page js active =====*/
        $('.gene-nav ul.menu > li > a').click(function() {
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 1000);
            return false;
        });
	/* ==== 21. Preloader ==== */
	$(window).on('load',function(){
		jQuery(".preloader-wrap").fadeOut(500);
	});

	
})(jQuery); 





