$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText:["⇦","⇨"],
        dots:true,
        autoplay:true,
        autoheight:true,
        autoplaySpeed:8000,
        smartSpeed:500,
        autoplayHoverPause:true,
    });
})






AOS.init({
    offset:200,
    duration:800,
});
