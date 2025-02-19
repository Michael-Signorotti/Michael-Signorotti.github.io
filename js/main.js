$(document).ready(function () {
    $('.header').height($(window).height());

    $('#scroll-indicator').addClass('faa-bounce animated faa-slow');
    $('.navbar-toggler-icon').css("color", "#FEFFFF");

    // Scroll down when clicking on the carrot down symbol
    $('#scroll-indicator').click(function () {
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 1000);
    });
});

$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

});

$('.navbar').on('show.bs.collapse', function () {

    if ($(window).scrollTop() == 0) {
        $('.navbar-toggler-icon').css("color", "#17252A");
        $('.navbar').addClass('navbar-scrolling');
        $('.navbar-brand').addClass('navbar-brand-scrolling');
        $('.nav-link').addClass('nav-link-scrolling');

    }

}).on('hidden.bs.collapse', function () {

    if ($(window).scrollTop() == 0) {
        $('.navbar').removeClass('navbar-scrolling');
        $('.navbar-brand').removeClass('navbar-brand-scrolling');
        $('.nav-link').removeClass('nav-link-scrolling');
        $('.navbar-toggler-icon').css("color", "#FEFFFF");

    }

});

$(window).scroll(function () {
    if ($(this).scrollTop() == 0 && $(".navbar-toggler").attr('aria-expanded').localeCompare("false") == 0) {
        $('.navbar').removeClass('navbar-scrolling');
        $('.navbar-brand').removeClass('navbar-brand-scrolling');
        $('.nav-link').removeClass('nav-link-scrolling');
        $('.navbar-toggler-icon').css("color", "#FEFFFF");
    } else {
        $('.navbar-toggler-icon').css("color", "#17252A");
        $('.navbar').addClass('navbar-scrolling');
        $('.navbar-brand').addClass('navbar-brand-scrolling');
        $('.nav-link').addClass('nav-link-scrolling');
        $('#scroll-indicator').removeClass('faa-bounce animated faa-slow');
        $('#scroll-indicator').hide();
    }
});
