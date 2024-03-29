let mobileNavSettings =(()=>{
    let init=()=>{
        $(document).ready(function() {
            mobileNav();
        });
    },
    mobileNav = () => {
        //MOBILE NAVIGATION
        let navItems = [];
        let sideNav = $("header nav");
        let menuButton = $("#menu-icon");
        let trigger = $(".sub-menu");

        // $('.nav-link').each(function () {
        //     navItems.push($(this).children());
        // })

        if ($(window).width() < mobileBreakpoint) {
            // $(sideNav).html(navItems);
            trigger.on("click", function (e) {
                e.stopPropagation();
                $(this).addClass('active')
                // $(this).parent('.nav-link').siblings().children('.sub-nav').slideUp();
                $(this).next('.sub-nav').slideToggle("fast").animate({easing: 'linear'});
            });
        }

        menuButton.on("click", function (e) {
            $(this).toggleClass('active');
            e.stopPropagation();
            e.preventDefault();

            // $('#header').toggleClass(headerPosition + ' active');
            $('#header').toggleClass('active');

            sideNav.slideToggle('fast', function () {
                if ($(this).is(':visible'))
                    $(this).css('display', 'flex');
            }).animate({easing: 'linear'});
            $('html, body').animate({ scrollTop: 0 }, 'fast');

        });

        // $(window).scroll(function(){
        //     var scroll = $(window).scrollTop()
        //     if(scroll >= 300){
        //         $('#header').addClass('scrolled');
        //     }else{
        //         $('#header').removeClass('scrolled');
        //     }
        // })

    }
    ;
    init();
    return {};
})();