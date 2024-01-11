function openNav() {
  document.getElementById("slide_nav").style.width = "250px";
};

function closeNav() {
  document.getElementById("slide_nav").style.width = "0";
};

var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitType(".titleGreathorned", {split:"words,chars"}), 
    chars = SplitGreat.chars;
tlSplitGreat.from(chars, {
  duration: 0.2,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
}, "+=0");

gsap.registerPlugin(ScrollTrigger);


gsap.set(".wrapper_2", {yPercent:0});
gsap.to(".wrapper_2", {
  xPercent: -50, 
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper_2",
    start: "top 30%", 
    end: "bottom 10%", 
    scrub: 2
  }
});

gsap.set(".titleBurrowing", { yPercent: -10});
gsap.to(".titleBurrowing", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".titleBurrowing",
    scrub: 2
  }, 
});

gsap.set(".bag", { yPercent: 50});
gsap.to(".bag", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".bag",
    scrub: 3
  }
});
gsap.set(".hanger", { yPercent: 50});
gsap.to(".hanger", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".hanger",
    scrub: 3
  }
});
gsap.set(".search", { yPercent: -10});
gsap.to(".search", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".search",
    scrub: 3
  }
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

// pin box-c when it reaches the center of the viewport, for 300px
ScrollTrigger.create({
  trigger: ".search",
  pin: true,
  start: "center center",
  end: "+=300",
  markers: true
});


// gsap.set('.search_icon', { scale: 1 });

// gsap.to(".search_icon", {
//   scale: 15,
//   ease: "power2",
//   xPercent: 250, 
//   yPercent: -500, 
//   transformOrigin: "right top", 
//   scrollTrigger: {
//     trigger: ".search_icon",
//     start: "top 50%", 
//     end: "bottom", 
//     scrub: 1,
//   }, 
// });

gsap.set(".shirt-1", { yPercent: 50});
gsap.set(".shirt-2", { yPercent: 40});
gsap.set(".shirt-3", { yPercent: 50});
gsap.set(".shirt-5", { yPercent: 40});
gsap.set(".shirt-6", { yPercent: 50});
gsap.set(".shirt-7", { yPercent: 40});
gsap.set(".shirt-8", { yPercent: 50});
gsap.set(".shirt-9", { yPercent: 40});
gsap.to(".shirt-1", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-1",
    scrub: 1
  }, 
});

gsap.to(".shirt-2", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-2",
    scrub: 5
  }, 
});

gsap.to(".shirt-3", {
  yPercent:-50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-3",
    scrub: 2
  }, 
});
gsap.to(".shirt-5", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-5",
    scrub: 4
  }, 
});
gsap.to(".shirt-6", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-6",
    scrub: 3
  }, 
});
gsap.to(".shirt-7", {
  yPercent: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3
  }, 
});
gsap.to(".shirt-8", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3
  }, 
});
gsap.to(".shirt-9", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3
  }, 
});
gsap.set(".shirt-4", { yPercent: 50});
gsap.to(".shirt-4", {
  xPercent: -100, 
  yPercent: 250,
  rotation:-10*1,
  transformOrigin: "right top", 
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-4",
    start: "top 10%", 
    end: "bottom", 
    scrub: 2
  }, 
});



