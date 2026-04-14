$(document).ready(function(){
    $('.our-programs').slick({
        infinite: true,
        slidesToShow: 3,  // Show 3 slides on large screens and tablets
        slidesToScroll: 1,
        autoplay: true,   // Autoplay enabled for all devices
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
            {
                breakpoint: 768,  // For tablet screens
                settings: {
                    slidesToShow: 3,  // Show 3 slides on tablets
                    slidesToScroll: 1,
                    autoplay: true,   // Autoplay enabled for tablets
                }
            },
            {
                breakpoint: 480,  // For mobile screens
                settings: {
                    slidesToShow: 1,  // Show 1 slide on mobile
                    slidesToScroll: 1,
                    autoplay: true,   // Autoplay enabled for mobile
                }
            }
        ]
    });
});


     // team Owl Carousel  //
  
     $(".teamCard").owlCarousel({
      margin: 20,
      loop: true,
      dots:true,
      autoplay: true,
      autoplayTimeOut: 2000,
      center:true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items:2,
          nav: false
        },
        1000: {
          items: 5,
          nav: false
        }
      }
    });
