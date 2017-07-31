$(function () {
    var hf = function () {
        var h_header = $('header').height();
        var h_footer = $('footer').height();
        $('.content').css({
            "paddingTop": h_header,
            'paddingBottom': h_footer
        });
    };
    $(window).bind('load resize', hf);
});

jQuery(document).ready(function ($) {
    /*mobile menu gamburger */
    $('#mobile-menu-btn').click(function () {
        $(this).toggleClass('open');
        $('.navbar-menu').slideToggle(300);
    });
    
    /*slick slider init*/
    $('#program-slider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true
    }).fadeIn(300);
    
    /*header menu scroll to section*/
    $('.js-ancor-scroll').click(function (e) {
        e.preventDefault();
        var currentLink = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(currentLink).offset().top - 85
        }, 1000);
        $('.navbar-menu__link').removeClass('active__link');
        $(this).addClass('active__link')
    })

    /*waypoints for animations*/
    $('#banner').waypoint(function () {
        $('.header').toggleClass('page-scroll')
    }, {
        offset: '-5px'
    });
    $('#sit-harmfully').waypoint(function () {
        $('.sit-harmfully-time').removeClass('animate-rotate-y')
    }, {
        offset: '50%'
    });
    $('#how-work').waypoint(function () {
        $('.how-work-list').removeClass('animate-rotate-y')
    }, {
        offset: '50%'
    });
    $('#program-steps').waypoint(function () {
        $('.program-steps__container').removeClass('animate-rotate-x')
    }, {
        offset: '50%'
    });
    
    /*appointment-forms open submenu and choise city*/
    $('.js-open-submenu').click(function () {
        $('.appointment-form__submenu').slideToggle(200)
    });
    $('input[name="department-city"]').on('change', function () {
        var currentValue = $(this).val();
        $('#department-city').val(currentValue);
        $('.appointment-form__submenu').slideToggle(200)
    });
});