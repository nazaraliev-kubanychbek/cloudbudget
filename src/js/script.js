
$('#demoDefaultSelection').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});


$(document).ready(function(){
    $(".slider1").owlCarousel({
        items:1,
        loop: true,
        autoplay:true,
    });
});

$('.mobile-btn').on('click', function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__menu').toggleClass('show-header__menu');
    $('.header__link').toggleClass('show-header__link');
});


$('.menu a nav').on('click', function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__menu').removeClass('show-header__menu');
    $('.header__link').removeClass('show-header__link');
});
