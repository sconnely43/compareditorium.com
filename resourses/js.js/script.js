$(document).ready (function() {



    $('.js--nav-icon').click(function() {
        var nav = $('.js--mob-main-nav');

        nav.slideToggle(200);

    });

    $('.js--nav-icon').click(function() {
        var nav = $('.js--mob-main-nav-mob');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')
        }


    });

});