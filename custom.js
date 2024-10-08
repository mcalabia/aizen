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
    setTimeout(function() {
        $('.ac-first').trigger('click');
        $('.dtct-mobile-dropdown-first').trigger('click');
      }, 100); // Wait for 100ms before triggering the click, adjust if needed
   
    
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
                    // markers: true, 
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

// PRIVACY POLICY
// Set initial opacity for elements
const privacyPolicyElements = [
    { selector: "#TOC-M1", trigger: "#title1" },
    { selector: "#TOC-M2", trigger: "#title2" },
    { selector: "#TOC-M3", trigger: "#title3" },
    { selector: "#TOC-M4", trigger: "#title4" },
    { selector: "#TOC-M5", trigger: "#title5" },
    { selector: "#TOC-M6", trigger: "#title6" }
];

privacyPolicyElements.forEach(({ selector, trigger }) => {
    const ppelement = document.querySelector(selector);
    const pptriggerElement = document.querySelector(trigger);
    
    // Check if both the element and its trigger exist
    if (ppelement && pptriggerElement) {
        gsap.set(ppelement, { opacity: 0.35 });

        gsap.fromTo(ppelement, 
            { color: "rgba(21, 21, 21)",
            opacity: 0.35
             }, 
            { 
                color: "var(--navy)", 
                opacity: 1,
                duration: 0.5, 
                scrollTrigger: {
                    trigger: pptriggerElement, 
                    start: "top center",
                    end: "bottom center", 
                    scrub: true, 
                    markers: true, 
                    toggleActions: "play reset play reset", 
                    onLeave: () => gsap.set(ppelement, { opacity: 0.5 }), 
                    onLeaveBack: () => gsap.set(ppelement, { opacity: 0.5 })
                }
            }
        );
    } else {
        console.warn(`Privacy Policy Elements or trigger not found: ${selector} / ${trigger}`);
    }
});


});


