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
        loop:false,
        autoWidth:true,
        items:4,
        nav:true,
        navText: [$('.arrow-left'),$('.arrow-right')],
        rewindNav : true,
        onInitialized: updateProgressBar, 
        onTranslated: updateProgressBar 
    });

    function updateProgressBar(event) {
        var currentIndex = event.item.index - event.relatedTarget._clones.length / 2; 
        var progressPercentage = ((currentIndex + 1) / totalItems) * 100;
        $('.progress-bar').css('width', progressPercentage + '%');
    }
});


