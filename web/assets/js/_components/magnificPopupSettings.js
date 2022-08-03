let magnificPopupSettings =(()=>{
    let init=()=>{
        $(document).ready(function() {
            if ($('.popup-video').length) {
                videoModal();
            }
            if ($('.gallery-item').length) {
                galleryItem();
            }
            if ($('.open-card-popup').length) {
                cardModal();
            }
            if ($('.open-contact-popup').length) {
                contactModal();
            }
            if ($('.popup-tweet').length) {
                tweetModal();
            }
            if ($('.open-popup-link').length) {
                modalLink();
            }
        });
    },
    videoModal = () => {
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
    },
    galleryItem = () => {
        // This will create a single gallery from all elements that have class "gallery-item"
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },
    cardModal = () => {
        $('.open-card-popup').magnificPopup({
            type: 'inline',
            midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
    },
    contactModal = () => {
        $('.open-contact-popup').magnificPopup({
            type: 'inline',
            midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
    },
    tweetModal = () => {
        $('.popup-tweet').magnificPopup({
            type: 'inline',
            gallery: {
                enabled: true
            }
        });
    },
    modalLink = () => {
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            gallery: {
                enabled: true
            },
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
    }
    ;
    init();
    return {};
})();