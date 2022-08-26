let menuSettings = (() => {
    let init = () => {
        $(document).ready(function() {
            if ($('#header').length) {
                menuHandler();
            }
            if ($('#header.fixed').length) {
                // adjustPadding();
            }
        });
    },
    menuHandler=()=>{
        gsap.registerPlugin(ScrollTrigger)
        const showAnim = gsap.from('.autoHide', {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
        });
    }
    adjustPadding=()=>{
        let headerHeight = $('#header').height()
        let main = $('main');
        main.css('margin-top',headerHeight);
    }
    ;
    init();
    return {};
})();
