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
        items:8,
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

    $('.fcs-owl-carousel').owlCarousel({
        loop:true,
        items:1,
        nav:true,
        navText: [$('.t-arrow-left'),$('.t-arrow-right')],
        rewindNav : true,
        dots: true, 
        dotsEach: true, 
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
    

    gsap.registerPlugin(ScrollTrigger);

    function animateElementsWithScroll(elements) {
        elements.forEach(({ selector, trigger }) => {
            const element = document.querySelector(selector);
            const triggerElement = document.querySelector(trigger);
    
            // Check if both the element and its trigger exist
            if (element && triggerElement) {
                const overlineElement = element.querySelector(".overline");
                gsap.set(element, { opacity: 0.5 });
    
                // Animate the main element
                if (element){
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
                            toggleActions: "play reset play reset",
                            onLeave: () => gsap.set(element, { opacity: 0.5 }),
                            onLeaveBack: () => gsap.set(element, { opacity: 0.5 })
                        }
                    }
                );
            }
    
                // Animate the overline element if it exists
                if (overlineElement){
                if (overlineElement) {
                    gsap.to(overlineElement,
                        {
                            display: "block",
                            duration: 0.1,
                            scrollTrigger: {
                                trigger: triggerElement,
                                start: "top 65%",
                                end: "bottom 65%",
                                toggleActions: "play reset play reset",
                                onLeave: () => gsap.set(element, { opacity: 0.5 }),
                                onLeaveBack: () => gsap.set(element, { opacity: 0.5 })
                            }
                        }
                    );
                }
    
            } else {
                // console.warn(`Element or trigger not found: ${selector} / ${trigger}`);
            }
        }
        });
    }
    
    // Example usage
    const elements = [
        { selector: "#data", trigger: "#data-container" },
        { selector: "#machine-learning", trigger: "#machine-learning-container" },
        { selector: "#infrastructure", trigger: "#infrastructure-container" } 
    ];
    

// PRIVACY POLICY
// Set initial opacity for elements

function animatePrivacyPolicyElements(elements) {
    elements.forEach(({ selector, trigger }) => {
        const ppelement = document.querySelector(selector);
        const pptriggerElement = document.querySelector(trigger);

        // Check if both the element and its trigger exist
        if (ppelement && pptriggerElement) {
            gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)" });

            gsap.fromTo(ppelement, 
                { 
                    color: "rgba(21, 21, 21)",
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
                        toggleActions: "play reset play reset", 
                        onLeave: () => gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)" }), 
                        onLeaveBack: () => gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)" })
                    }
                }
            );
        } else {
            // console.warn(`Privacy Policy Element or trigger not found: ${selector} / ${trigger}`);
        }
    });
}


const privacyPolicyElements = [
    { selector: "#TOC-M1", trigger: "#title1" },
    { selector: "#TOC-M2", trigger: "#title2" },
    { selector: "#TOC-M3", trigger: "#title3" },
    { selector: "#TOC-M4", trigger: "#title4" },
    { selector: "#TOC-M5", trigger: "#title5" },
    { selector: "#TOC-M6", trigger: "#title6" }
];

// ANIMATION
function initAnimations() {
    // Navbar animation
    const navbar = document.querySelector(".navbar");
    if(navbar){
    gsap.fromTo(navbar, 
        { y: -100 }, 
        { duration: 1, y: 0, ease: "power2.out" }
    );
    }

    // Hero container animation
    const hero_container = document.querySelector(".hero-container");
    if(hero_container){
    gsap.fromTo(hero_container, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, ease: "power2.out" }
    );
}

    // Slide up the hero description block
    const hero_description_block = document.querySelector(".hero-description-block");
    if(hero_description_block){
    gsap.fromTo(hero_description_block, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );
}

    // Slide up the hero image
    const hero_image = document.querySelector(".hero-image");
    if(hero_image){
    gsap.fromTo(hero_image, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );
}

    // Logo carousel container animation
    const logo_carousel_container = document.querySelector(".logo-carousel-container");
    if(logo_carousel_container){
    gsap.fromTo(logo_carousel_container, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
    );
}

    // Navbar background color change on scroll
    const navbar2 = document.querySelector(".navbar");
    if (navbar2){
    gsap.to(navbar2, {
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
}


}


if (window.matchMedia("(min-width: 992px)").matches) {
    DTCTTabloopDesktop();
}

animateElementsWithScroll(elements);
animatePrivacyPolicyElements(privacyPolicyElements);
initAnimations();

//   Reveal on scroll animation

function initRevealOnScroll() {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, { types: 'chars' });
        if (text){
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
            }
        );
    }

    });

    const lenis = new Lenis();

    lenis.on('scroll', (e) => {});

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

function animateElementWithScrollTrigger(element, section, delay) {
    const elementdata = document.querySelector(element);
if(elementdata){
    gsap.fromTo(element, 
        { y: 100, opacity: 0 }, 
        {
            y: 0, 
            opacity: 1, 
            duration: 1, 
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,   
                // markers:true,
                start: "top bottom", 
                end: "bottom top",
                scrub: true          
            }
        }
    );
}
}

$('.save-pdf-button').on('click', function() {
    window.print();
});



// function ACDropdownLoops() {
//     setTimeout(function() {
//         var $current = $('.accordion-dropdown-block').children('.ac-dropdown:first');
//         var $next = $current.next();
//         if ($next.length === 0) {
//             $next = $('.accordion-dropdown-block').children().first();
//         }
//         $next.trigger('click');
//         ACDropdownLoops();
//     }, 5000);
// }

// ACDropdownLoops();

function copyCurrentLink(buttonClass) {
    $(buttonClass).on('click', function() {
      const currentLink = window.location.href; // Get the current page URL

      navigator.clipboard.writeText(currentLink).then(() => {
        alert('Page link copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy link:', err);
      });
    });
  }


  

  // Function to update opacity based on select value
  function updateSelectOpacity() {
      if ($('.select-field').val() === "") {
          $('.select-field').css('opacity', '0.5');
      } else {
          $('.select-field').css('opacity', '1');
      }
  }

  updateSelectOpacity();
  $('.select-field').on('change', function() {
      updateSelectOpacity();
  });

copyCurrentLink('.copy-link-button');
animateElementWithScrollTrigger("._3-col-grid", "._3-col-grid", 0)
animateElementWithScrollTrigger(".sntcc-block", ".sntcc-block", 0)
animateElementWithScrollTrigger(".sntcc-sticky-nav", ".sntcc-sticky-nav", 0)
animateElementWithScrollTrigger("#data-container", "#data-container", 0)
animateElementWithScrollTrigger("#machine-learning-container", "#machine-learning-container", 0)
animateElementWithScrollTrigger("#infrastructure-container", "#infrastructure-container", 0)
animateElementWithScrollTrigger(".cta-banner-block", ".cta-banner-block", 0)
animateElementWithScrollTrigger(".five-cards-block", ".five-cards-block", 0)
animateElementWithScrollTrigger(".five-cards-grid-1", ".five-cards-grid-1", 0)
animateElementWithScrollTrigger(".five-cards-grid-2", ".five-cards-grid-2", 0)
animateElementWithScrollTrigger(".text-image-block", ".text-image-block", 0)
animateElementWithScrollTrigger(".cci-block", ".cci-block", 0)
animateElementWithScrollTrigger(".cci-cards", ".cci-cards", 0)
animateElementWithScrollTrigger(".testimonials-block", ".testimonials-block", 0)
animateElementWithScrollTrigger(".testimonials-cards-block", ".testimonials-cards-block", 0)
animateElementWithScrollTrigger(".resources-content", ".resources-content", 0)
animateElementWithScrollTrigger(".resources-grid", ".resources-grid", 0)
animateElementWithScrollTrigger(".global-cta-block", ".global-cta-block", 0)


animateElementsWithScroll(elements);
animatePrivacyPolicyElements(privacyPolicyElements);
initAnimations();
initRevealOnScroll();

});


