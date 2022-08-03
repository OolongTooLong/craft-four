let accordionSettings =(()=>{
    let init=()=>{
        $(document).ready(function() {
            if ($('.accordion-block').length) {
                gridAccordion();
            }
            if ($('.cat-content').length) {
                // channelAccordion();
            }
        });
    },
    gridAccordion = () => {
        // Block Trigger
        $(".draw").hide();
        $(".trigger").click(function () {
            let $this = $(this);
            $this.parent('.accordion-block').toggleClass('active');
            $this.next().slideToggle( "fast","linear", function() {
                // Animation complete.
            });
        });

    },
    channelAccordion = () => {
        // Channel Trigger
        $(".cat-content").hide();
        $(".channel-trigger").click(function () {
            let $this = $(this);
            let $catContent = $this.parent('.grid').next('.cat-content');
            $this.toggleClass('active');
            $catContent.toggleClass('active');
            $catContent.slideToggle( "medium","linear", function() {
                // Animation complete.
            });
        });
    }
    ;
    init();
    return {};
})();
