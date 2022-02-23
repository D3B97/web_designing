$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText:["⇦","⇨"],
        dots:true,
        autoplay:true,
        autoheight:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
    });
})






AOS.init({
    offset:200,
    duration:800,
});
