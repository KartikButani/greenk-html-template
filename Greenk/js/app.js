/**
 *
 * Theme: Green K
 * Author: krButani
 * Date: 05/11/2017
 */

$(document).ready(function() {

    /**
     *   ################################
     *      Testimonial Slider
     *   ################################
     */
    var testimonialSlider = $(".testimonial-wrapper");
    testimonialSlider.owlCarousel({
        singleItem :        true,
        autoPlay :          3000,
        slideSpeed :        500,
        paginationSpeed :   500,
        autoHeight :        false,
        navigation:         false,
        pagination:         true,
    });

    //$('.preloader').fadeOut();
    //Initiat WOW JS
    new WOW().init();

    // Progress Bar
    $('#skill-View').bind('inview', function(event, visible, visiblePartX, visiblePartY) {

        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).animate({ width:$(this).attr('aria-valuetransitiongoal')+'%' },100);
            });
            $(this).unbind('inview');
        }
    });

    // Got to home scroll top
    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if(top > 200) {
            $('.gk-top').fadeIn(300);
        } else {
            $('.gk-top').fadeOut(300);
        }
    });

    // About Counter animation.
    $('#about').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.counter').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });

    $(window).smoothScroll();
});

// Whem click a link scroll smooth and goto specifi id.
function scrollpage(str) {
    $.smoothScroll({scrollTarget: '#' + str});
}

// Preloader
window.onload = function () {
    $('.preloader').fadeOut();
};