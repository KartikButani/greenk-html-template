$(document).ready(function() {




    // Got to home scroll top
    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if(top > 200) {
            $('.gk-top').fadeIn(300);
        } else {
            $('.gk-top').fadeOut(300);
        }
    });

});


// Whem click a link scroll smooth and goto specifi id.
function scrollpage(str) {
    $.smoothScroll({scrollTarget: '#' + str});
}
// Preloader
window.onload = function () {
    $('.preloader').fadeOut();
};