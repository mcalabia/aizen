$(document).ready(function() {
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

    $('.cci-owl-carousel').owlCarousel({
        margin:22,
        loop:true,
        autoWidth:true,
        items:4
    })
});


