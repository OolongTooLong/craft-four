let splitHeroSettings =(()=>{
    let init=()=>{
        $(document).ready(function() {
            if ($('#para-wrap').length) {
                parallaxSlides();
                fadeSlides();
                blurText();
            }
        });
    },

    parallaxSlides = () => {  // parallax effect on each image slide
            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.create({
                trigger: "#hero",
                start: "top top",
                pin: true,
                pinSpacing: false
            });
            // move background image wrapper in Y direction
            gsap.to("#backGround",{
                y:"-20px",
                scrollTrigger: {
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true
                }
            });
            gsap.to('.hero-text',{
                y:'-100px',
                scrollTrigger: {
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true
                }
            });
            // blur animation
            gsap.to(".hero-text", {
                duration: 1,
                filter:"blur(100px)",
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
        },

    fadeSlides = () => { // fade between slides
            const imgs = gsap.utils.toArray("#backGround .image-wrap");
            const next = 5; // time to change
            const fade = 1.5; // fade time
            //only for the first
            gsap.set(imgs[0], {autoAlpha: 1})

            function crossfade() {
                const action = gsap.timeline()
                    .to(imgs[0], {autoAlpha: 0, duration: fade})
                    .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)
                imgs.push(imgs.shift());
                // start endless run
                gsap.delayedCall(next, crossfade);
            }
            // start the crossfade after next = 3 sec
            gsap.delayedCall(next, crossfade);
        },

    blurText = () => {
        // gsap.registerPlugin(SplitText);
        var tl = gsap.timeline();

        // mySplitText = new SplitText(".hero .inner_wrapper", { type: "words,chars" }),
        // chars = mySplitText.chars; //an array of all the divs that wrap each character
        // gsap.set(".hero .inner_wrapper", { opacity: 1 }); //reveal wrapper before animation
        tl.fromTo(".hero-text", {
            duration: 1,
            opacity: 0,
            y: 18,
            ease: "none",
            // stagger: 0.01
        },{
            delay: 0.5,
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "none",
            // stagger: 0.01
        });
    }

    ;
    init();
    return {};
})();