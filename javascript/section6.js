gsap.set(".sec-5-bg", { yPercent: -20 });
gsap.to(".sec-5-bg", {
  yPercent: -120,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".sec-5-bg",
    start: "top -10%",
    end: "+=400",
    scrub: 3,
    duration: 3,
  },
});


gsap.set(".sec-6-title", { yPercent: -60, scale: 1 });
const sec6_title = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".sec-6-title",
    scrub: 3,
    start: "top",
    end: "center+=300",
  },
});
sec6_title.to(".sec-6-title", {
  yPercent: -120,
  ease: "none",
  duration: 2,
})
.to(".sec-6-title", {
  yPercent: -40,
  scale:0.9,
  ease: "power4.out",
  duration: 3,
});

gsap.set(".clock-1", { yPercent: -100, xPercent:-250});
const clock_1 = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".clock-1",
    scrub: 3,
    start: "top",
    end: "top+=100",
    // markers:true,
  },
});
clock_1.to(".clock-1", {
  yPercent: -5,
  xPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clock-1",
    start: "center 20%",
    end: "top+=10",
    scrub: 3,
    // markers:true,
  }, 
})
// .to(".clock-1", {
//   xPercent: -200,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".clock-1",
//     start: "center 75%",
//     end: "center+=100",
//     scrub: 3,
//     markers:true,
//   }, 
// })


gsap.set(".clock-2", { yPercent: -150, xPercent:-360, });
const clock_2 = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".clock-2",
    scrub: 3,
    start: "top",
    end: "top+=100",
    //markers:true,
  },
});
clock_2.to(".clock-2", {
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity:1,

})
// to(".clock-2", {
//   yPercent: 0,
//   xPercent: -30,
//   ease: "none",
//   opacity:1,
//   scrollTrigger: {
//     trigger: ".clock-2",
//     scrub: 3,
//     markers:true,
//   }, 
// })

gsap.set(".clock-3", { yPercent: -150, xPercent:500, });
const clock_3 = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".clock-3",
    scrub: 2,
    start: "top",
    end: "top+=50",
    // markers:true,
  },
});
clock_3.to(".clock-3", {
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity:1,

})

gsap.set(".clock-4", { yPercent: -150, xPercent:270, });
const clock_4 = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".clock-4",
    scrub: 2,
    start: "top",
    end: "top+=50",
    // markers:true,
  },
});
clock_4.to(".clock-4", {
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity:1,

})

gsap.set(".shirt-orange", { yPercent: -150, xPercent:300, });
const shirt_orange = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".shirt-orange",
    scrub: 2,
    start: "top",
    end: "top+=50",
    // markers:true,
  },
});
shirt_orange.to(".shirt-orange", {
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity:1,

})

gsap.set(".g04_woman", { yPercent: -50, xPercent:-350});
const women = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".g04_woman",
    scrub: 3,
    start: "top",
    end: "top+=10",
    //markers:true,
  },
});
women.to(".g04_woman", {
  yPercent: -5,
  xPercent: 5,
  ease: "none",
})

gsap.set(".g05_paper", {  yPercent: -190, xPercent:-300});
const paper = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".g05_paper",
    scrub: 2,
    start: "top",
    end: "top+=10",
    markers:true,
  },
});
paper.to(".g05_paper", {
  yPercent: 0,
  xPercent: 1,
  ease: "none",
  opacity:1,

})