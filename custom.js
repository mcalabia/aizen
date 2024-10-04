$(document).ready(function() {
    $('.ac-first').trigger('click');

    $('.lc-owl-carousel').owlCarousel({
        margin:112,
        loop:true,
        autoWidth:true,
        nav: false,
        autoplay:true,
        items:8,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        autoplaySpeed: 6000,
        smartSpeed: 6000
    })

    $('.tcl-owl-carousel').owlCarousel({
        margin:72,
        loop:true,
        autoWidth:true,
        nav: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        autoplaySpeed: 6000,
        smartSpeed: 6000,
        responsiveClass:true,
        responsive:{
            0:{
                margin:32,
            },
            767:{
                margin:72,
            }
        }
    })

    $('.cci-owl-carousel').owlCarousel({
        margin:22,
        loop:false,
        autoWidth:true,
        items:4,
        nav:true,
        navText: [$('.arrow-left'),$('.arrow-right')],
        rewindNav : true,
        dots: true, 
        dotsEach: true, 
    })

    $('.testimonial-owl-carousel').owlCarousel({
        margin:48,
        loop:false,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [$('.t-arrow-left'),$('.t-arrow-right')],
        rewindNav : true,
        dots: true, 
        dotsEach: true, 
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:false
            },
            991:{
                autoWidth:true
            }
        }
    })

   
});


var Webflow = Webflow || [];
Webflow.push(function () {

var tabTimeout;
clearTimeout(tabTimeout);
tabLoop();

function tabLoop() {
tabTimeout = setTimeout(function() {
var $next = $('.tabs-list').children('.w--current:first').next();
if($next.length) {
if ($(".menu-button").hasClass("w--open")) {
tabLoop();
}else{
$next.removeAttr("href").click();
}
} else {
if ($(".menu-button").hasClass("w--open")){
tabLoop();
}else{
$('.tab-text-box:first').removeAttr("href").click();
}
}
}, 5000); // 5 seconds
}

$('.tab-text-box').click(function() {
clearTimeout(tabTimeout);
tabLoop();
});
});