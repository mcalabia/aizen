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
    // setTimeout(function() {
    //     $('.ac-first').trigger('click');
    //     $('.dtct-mobile-dropdown-first').trigger('click');
    //   }, 100); // Wait for 100ms before triggering the click, adjust if needed
   
    
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
        const overlineElement = element.querySelector(".overline");
        gsap.set(element, { opacity: 0.5 });
        gsap.fromTo(element, 
            { opacity: 0.5 }, 
            { 
                opacity: 1, 
                padding: "8px 16px 8px 8px",
                duration: 0.5, 
                scrollTrigger: {
                    trigger: triggerElement, 
                    start: "top 65%",
                    end: "bottom 65%", 
                    // scrub: true, 
                    // markers: true, 
                    toggleActions: "play reset play reset", 
                    onLeave: () => gsap.set(element, { opacity: 0.5 }), 
                    onLeaveBack: () => gsap.set(element, { opacity: 0.5 })
                }
            }
        );
        if(overlineElement){
            gsap.to(overlineElement, 
                { 
                    display: "block",
                    duration: 0.1, 
                    scrollTrigger: {
                        trigger: triggerElement, 
                        start: "top 65%",
                        end: "bottom 65%", 
                        // scrub: true, 
                        // markers: true, 
                        toggleActions: "play reset play reset", 
                        onLeave: () => gsap.set(element, { opacity: 0.5 }), 
                        onLeaveBack: () => gsap.set(element, { opacity: 0.5 })
                    }
                }
            );
        }

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
        gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)" });

        gsap.fromTo(ppelement, 
            { color: "rgba(21, 21, 21)",
            opacity: 0.35
             }, 
            { 
                color: "var(--navy)", 
                opacity: 1,
                duration: 0.1, 
                scrollTrigger: {
                    trigger: pptriggerElement, 
                    start: "top 35%",
                    end: "bottom 35%", 
                    // scrub: true, 
                    // markers: true, 
                    toggleActions: "play reset play reset", 
                    onLeave: () => gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)"}), 
                    onLeaveBack: () => gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)"})
                }
            }
        );
    } else {
        // console.warn(`Privacy Policy Elements or trigger not found: ${selector} / ${trigger}`);
    }
});

// ANIMATION

gsap.fromTo(".navbar", { 
    y: -100
     }, {
    duration: 0.5, y: 0, ease: "power2.out", 
  });

  gsap.fromTo(".hero-container", 
    { opacity: 0 }, 
    { opacity: 1, duration: 1, ease: "power2.out" } 
  );
// Slide up the .hero-description-block
gsap.fromTo(".hero-description-block", 
    { y: 100, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" } 
  );
  
  // Slide up the .hero-image
  gsap.fromTo(".hero-image", 
    { y: 100, opacity: 0 },  
    { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" } 
  );

  gsap.fromTo(".logo-carousel-container", 
    { opacity: 0 }, 
    { opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" } 
  );

  gsap.to(".navbar", {
    backgroundColor: "rgba(255, 253, 248, 0.80)",
    backdropFilter: "blur(5.9px)",               
    ease: "power2.out",                           
    scrollTrigger: {
      trigger: "body",       
      start: "top -50px",  
      toggleActions: "play none none reverse", 
      scrub: true           
    }
});

//   Reveal on scroll animation
const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char,i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor

            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        })


        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)


});


