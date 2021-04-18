$(function () {
    var html_body = $('html,body');


    //varable declare;
    var backtop = $('.backtoTop');

    //navbar active on mouseover;

    $('.navbar .nav-item').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    // fixed navbar;
    $(window).scroll(function () {
        var navscroll = $(this).scrollTop();
        var backtoTop = $(this).scrollTop();
        if (navscroll > 400) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');

        }

        // backtoTop;
        if (backtoTop > 500) {
            backtop.fadeIn();
        } else {
            backtop.fadeOut();
        }
    });


    // backtoTop body-0 ;
    backtop.click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1000);
    });

    //  slider js;
    $('.bannerSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        speed: 2500,
        autoplaySpeed: 2500,
    });
    //  about js
    $('.venobox').venobox();

    //  testimonial js
    $('.testimonialSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToShow: 2,
        speed: 1500,
        autoplaySpeed: 2500,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoPlay: false,
                }
            },
        ]
    });
    // funfact counter up
    $('.counter').counterUp({
        time: 2000,
    });

    //  brandSlider
    $('.brandSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        prevArrow: '<i class="slick-prev fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next fas fa-chevron-right"></i>',
        centerMode: true,
        centerPadding: '0',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoPlay: true,
                    arrows: false,
                }
            },
        ]

    });
    //  wow js
    new WOW().init();

    // scrollEfect
    $('.navbar-nav .nav-item .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 2000);
                return false;
            }
        }

    });
    // color picker
    $('.colorPickerIcon').on('click', function () {
        $('.colorPicker').toggleClass('cP');
    });
    $('.colorPicker ul .lightPink').on('click', function () {
        $('body').addClass('lightPink').removeClass('orangred').removeClass('SkyBlue').removeClass('crimson').removeClass('magenta');
    });
    $('.colorPicker ul .orangred').on('click', function () {
        $('body').addClass('orangred').removeClass('lightPink').removeClass('SkyBlue').removeClass('crimson').removeClass('magenta');
    });
    $('.colorPicker ul .SkyBlue').on('click', function () {
        $('body').addClass('SkyBlue').removeClass('lightPink').removeClass('orangred').removeClass('crimson').removeClass('magenta');
    });
    $('.colorPicker ul .crimson').on('click', function () {
        $('body').addClass('crimson').removeClass('lightPink').removeClass('orangred').removeClass('SkyBlue').removeClass('magenta');
    });
    $('.colorPicker ul .magenta').on('click', function () {
        $('body').addClass('magenta').removeClass('lightPink').removeClass('orangred').removeClass('SkyBlue').removeClass('crimson');
    });
    $('.colorPicker ul .default').on('click', function () {
        $('body').removeClass('magenta').removeClass('lightPink').removeClass('orangred').removeClass('SkyBlue').removeClass('crimson');
    });
    // preloader
    $(window).on('load', function () {
        $('.preloader').delay(2500).fadeOut();
    });
});