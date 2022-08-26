let panelAnimationSettings =(()=>{
    let init=()=>{
        $(document).ready(function() {
            if ($('.panel-wrapper').length) {
                panelAnimation();
            }
        });
    },

    panelAnimation=()=>{
        ScrollTrigger.matchMedia({
            "(min-width: 1000px)": function () { // desktop
                let imgTrig = gsap.utils.toArray(".rightTrigger");
                let pinRightPanels = gsap.utils.toArray(".pinRight")
                pinRightPanels.forEach((pinRight, i) => { // right panel - text - get all items to fade in
                    ScrollTrigger.create({
                        trigger: pinRight,
                        start: "top top",
                        pin: true,
                        end: "max",
                        pinSpacing:false,
                        id: "pinRight",
                        markers: {
                            startColor: "green",
                            endColor: "green",
                            fontSize: "18px",
                            indent: 0
                        }
                    });
                });
                gsap.utils.toArray(".panelAnimation").forEach((rightBlock, i) => { // right panel - text - get all items to fade in

                    rightBlock.text = rightBlock.querySelectorAll(".stack > *"); // get all child items to stagger in
                    const panelTimeline = gsap.timeline({defaults: { ease: "none"}})
                    panelTimeline
                        .fromTo(rightBlock,{ autoAlpha:0 },{ duration: 1, autoAlpha: 1}) // fade in panel
                        .fromTo(rightBlock.text,{ y: '60vh', autoAlpha:0 },{ duration: 0.5, autoAlpha:1, y: 0, stagger: 0.2}, ">-0.2"); // move from y 60vh to 0vh staggered
                    ScrollTrigger.create({
                        trigger: () => imgTrig[i], // trigger from marker of same index
                        animation: panelTimeline,
                        start: "top top",
                        invalidateOnRefresh: true,
                        end: "max",
                        toggleActions: "play none none reverse",
                        id: "text-"+i,
                        markers: {
                            startColor: "red",
                            endColor: "red",
                            fontSize: "18px",
                            indent: 200
                        }
                    });
                });
                gsap.utils.toArray(".pinLeft").forEach((panel, i) => { // left panel - image
                    ScrollTrigger.create({
                        trigger: panel,
                        start: "top top",
                        end: "max",
                        pin: true,
                        pinSpacing:false,
                        id: "#"+panel.getAttribute("id"), // used for desktop navigation
                        markers: {
                            startColor: "blue",
                            endColor: "blue",
                            fontSize: "18px",
                            indent: 400
                        }
                    });
                });
            },

            "(max-width: 999px)": function () { // mobile
                gsap.utils.toArray(".pinAllMobile").forEach((panel, i) => {
                    ScrollTrigger.create({
                        trigger: panel,
                        end: "+=200%",
                        start: "top top",
                        pin: true,
                        pinSpacing: false,
                        id: "#"+panel.getAttribute("id"), // used for mobile navigation
                    });
                });
            },
            "all": function () { // all
            }
        });
    }

    ;
    init();
    return {};
})();