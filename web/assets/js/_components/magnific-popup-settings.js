'use strict';
(function ($) {
// This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    $('.popup-video').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade video-plyr',
        midClick: true,
        gallery: {
            enabled: true
        },
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)', // title for right button
        callbacks: {
            open: function () {
                video();
                var mfp = $.magnificPopup.instance;
                var proto = $.magnificPopup.proto;
                mfp.next = function () {
                    video();
                    proto.next.call(mfp);
                };
                mfp.prev = function () {
                    video();
                    proto.prev.call(mfp);
                };
            },
            close: function () {

            }
        }
    });
    $('.open-card-popup').magnificPopup({
        type: 'inline',
        midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    $('.open-contact-popup').magnificPopup({
        type: 'inline',
        midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    $('.popup-tweet').magnificPopup({
        type: 'inline',
        gallery: {
            enabled: true
        }
    });
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        gallery: {
            enabled: true
        },
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

})(jQuery); // Fully reference jQuery after this point.
