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

    function DTCTTabloopDesktop() {
        setTimeout(function() {
            var $current = $('.dtct-tabs-menu').children('.w--current:first');
            var $next = $current.next();
            if ($next.length === 0) {
                $next = $('.dtct-tabs-menu').children().first();
            }
            $next.removeAttr("href").trigger('click');
            DTCTTabloopDesktop();
        }, 10000);
    }
    if (window.matchMedia("(min-width: 992px)").matches) {
        DTCTTabloopDesktop();
    }

    $('.ac-first').trigger('click');
    $('.dtct-mobile-dropdown-first').trigger('click');
    
    gsap.registerPlugin(ScrollTrigger);

// Set initial opacity for elements
const elements = [
    { selector: "#data", trigger: "#data-container" },
    { selector: "#machine-learning", trigger: "#machine-learning-container" },
    { selector: "#infrastructure", trigger: "#infrastructure-container" } // Fixed typo: "infastructure" to "infrastructure"
];

elements.forEach(({ selector, trigger }) => {
    const element = document.querySelector(selector);
    const triggerElement = document.querySelector(trigger);
    
    // Check if both the element and its trigger exist
    if (element && triggerElement) {
        gsap.set(element, { opacity: 0.5 });
        gsap.fromTo(element, 
            { opacity: 0.5 }, 
            { 
                opacity: 1, 
                duration: 0.5, 
                scrollTrigger: {
                    trigger: triggerElement, 
                    start: "top 65%",
                    end: "bottom 65%", 
                    scrub: true, 
                    markers: true, 
                    toggleActions: "play reset play reset", 
                    onLeave: () => gsap.set(element, { opacity: 0.5 }), 
                    onLeaveBack: () => gsap.set(element, { opacity: 0.5 })
                }
            }
        );
    } else {
        console.warn(`Element or trigger not found: ${selector} / ${trigger}`);
    }
});




});


