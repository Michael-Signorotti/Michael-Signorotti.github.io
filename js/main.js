$(document).ready(function () {
    $('.header').height($(window).height());
    
    $('#scroll-indicator').addClass('faa-bounce animated faa-slow');
});

$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

});

$(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
        $('.navbar').removeClass('navbar-scrolling');
        $('.navbar-brand').removeClass('navbar-brand-scrolling');
        $('.nav-link').removeClass('nav-link-scrolling');
    } else {
        $('.navbar').addClass('navbar-scrolling');
        $('.navbar-brand').addClass('navbar-brand-scrolling');
        $('.nav-link').addClass('nav-link-scrolling');
        $('#scroll-indicator').removeClass('faa-bounce animated faa-slow');
        $('#scroll-indicator').hide();
    }
});
