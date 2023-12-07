$(document).ready(function(){

    $(".butBenefits").click(function(){
        $('html, body').animate({
            scrollTop: $("#benefits").offset().top
         }, 500);
    });
    $(".butHome").click(function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
         }, 500);
    });
    $(".butContact").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
         }, 500);
    });

 });