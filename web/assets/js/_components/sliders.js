'use strict';
(function ($) {
// CAROUSELS FUNCTION
    function sliders() {

        $(window).on('load resize orientationchange', function () {
            // TARGET EACH SLIDER
            $('.mobile-slider').each(function () {
                let $carousel = $(this);

                if ($(window).width() > 920) {
                    if ($carousel.hasClass('slick-initialized')) {
                        $carousel.slick('unslick');
                    }
                } else {
                    if (!$carousel.hasClass('slick-initialized')) {
                        $carousel.slick({
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: true,
                            dots: true,
                            responsive: [
                                {
                                    breakpoint: 767,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        });
                    }
                }
            });
        });
        $('.testimonial-slider').each(function (index, sliderWrap) {
            let $carousel = $(this);
            // TESTIMONIAL SLIDER
            $carousel.slick({
                // infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                adaptiveHeight: true,
            });
        });

        $('.slider').each(function (index, sliderWrap) {
            let $carousel = $(this);
            $carousel.slick({
                adaptiveHeight: true,
            });
        });

        $('.social-slider').each(function (index, sliderWrap) {
            let $carousel = $(this);
            $carousel.slick({
                slidesToShow: 3,
                adaptiveHeight: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });

        $('.slidesBlock').each(function (index, sliderWrap) {
            let $carousel = $(this);
            $carousel.slick(
                {
                    customPaging: function ($carousel, i) {
                        return '<button class="tab">' + $($carousel.$slides[i]).attr('title');
                    },
                    fade: true,
                    responsive: [
                        {
                            breakpoint: 920,
                            settings: {
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                }
            );
        });

        $('.hero-slider').each(function (index, sliderWrap) {
            let $carousel = $(this);
            $carousel.slick(
                {
                    customPaging: function ($carousel, i) {
                        return '<button class="tab">' + $($carousel.$slides[i]).attr('title');
                    },
                    fade: true,
                    autoplaySpeed: 5000,
                }
            );
        });
        $('.angle-slider').each(function (index, sliderWrap) {
            let $carousel = $(this);
            $carousel.slick(
                {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    dots:false,
                    autoplay:true,
                    fade:true,
                    speed: 500,
                    cssEase: 'linear'
                }
            );
        });

        //ticking machine
        var percentTime;
        var tick;
        var time = .1;
        var progressBarIndex = 0;

        $('.progressBarContainer .progressBar').each(function(index) {
            var progress = "<div class='inProgress inProgress" + index + "'></div>";
            $(this).html(progress);
        });

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
                startProgressbar();
            } else {
                percentTime += 1 / (time + 5);
                $('.inProgress' + progressBarIndex).css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $('.single-item').slick('slickNext');
                    progressBarIndex++;
                    if (progressBarIndex > 2) {
                        progressBarIndex = 0;
                    }
                    startProgressbar();
                }
            }
        }

        function resetProgressbar() {
            $('.inProgress').css({
                width: 0 + '%'
            });
            clearInterval(tick);
        }
        startProgressbar();
        // End ticking machine

        $('.item').click(function () {
            clearInterval(tick);
            var goToThisIndex = $(this).find("span").data("slickIndex");
            $('.single-item').slick('slickGoTo', goToThisIndex, false);
            startProgressbar();
        });
    }

    $(document).ready(function () {
        // CALL SLIDERS ON PAGE LOAD
        sliders();
    });
})(jQuery); // Fully reference jQuery after this point.
