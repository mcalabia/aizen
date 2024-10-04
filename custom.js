$(document).ready(function() {
    if ($('.ac-first').length) {
        $('.ac-first').trigger('click');
        console.log($('.ac-first').html())
    } else {
        // Wait for the element to appear if it's dynamically loaded
        var checkExist = setInterval(function() {
            if ($('.ac-first').length) {
                $('.ac-first').trigger('click');
                clearInterval(checkExist); // Stop checking after element is found
            }
        }, 100); // Check every 100 milliseconds
    }


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


