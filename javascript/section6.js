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
sec6_title
  .to(".sec-6-title", {
    yPercent: -120,
    ease: "none",
    duration: 2,
  })
  .to(".sec-6-title", {
    yPercent: -40,
    scale: 0.9,
    ease: "power4.out",
    duration: 3,
  });

gsap.set(".clock-1", { yPercent: -100, xPercent: -10, opacity: 0 });
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
  opacity: 1,
  yPercent: -5,
  xPercent: 5,
  ease: "none",
});
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

gsap.set(".clock-2", { yPercent: -60, xPercent: -60, opacity: 0 });
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
  opacity: 1,
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity: 1,
});
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

gsap.set(".clock-3", { yPercent: -50, xPercent: 50, opacity: 0 });
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
  opacity: 1,
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity: 1,
});

gsap.set(".clock-4", { yPercent: -120, xPercent: 50, opacity: 0 });
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
  opacity: 1,
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity: 1,
});

gsap.set(".shirt-orange", { yPercent: -180, xPercent: 50, opacity: 0 });
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
  opacity: 1,
  yPercent: 0,
  xPercent: 2,
  ease: "none",
  opacity: 1,
});

gsap.set(".g04_woman", { yPercent: -40, xPercent: -50, opacity: 0 });
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
  opacity: 1,
  yPercent: -5,
  xPercent: 5,
  ease: "none",
});

gsap.set(".g05_paper", { yPercent: -190, xPercent: -30, opacity: 0 });
const paper = gsap.timeline({
  scrollTrigger: {
    trigger: ".g05_paper",
    scrub: 2,
    start: "top",
    end: "top+=10",
    //markers:true,
  },
});
paper.to(".g05_paper", {
  opacity: 1,
  yPercent: 0,
  xPercent: 1,
  ease: "none",
  opacity: 1,
});

gsap.set(".woman_red", { yPercent: 20 });
gsap.to(".woman_red", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".woman_red",
    scrub: 1,
  },
});
gsap.set(".woman_original", { yPercent: 20 });
gsap.to(".woman_original", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".woman_original",
    scrub: 2,
  },
});
gsap.set(".woman_red2", { yPercent: 20 });
gsap.to(".woman_red2", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".woman_red2",
    scrub: 3,
  },
});
// gsap.set(".sec-6-title2", { yPercent: 20});
// gsap.to(".sec-6-title2", {
//   yPercent: -20,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".sec-6-title2",
//     scrub: 3
//   },
// });

ScrollTrigger.create({
  trigger: ".all_woman",
  start: "top-=350px top",
  end: "bottom+=700 top",
  pin: ".sec-6",
  ease: "power1.out",
  scale: 0,
  // markers:true,
  // markers: {
  //   startColor: "blue",
  //   endColor: "red",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   indent: 20,
});

gsap.set(".banner_slide", { yPercent: 300 });
gsap.to(".banner_slide", {
  yPercent: -800,
  ease: "power1.out",
  start: "top top",
  end: "bottom bottom",
  duration: 2,
  scrollTrigger: {
    trigger: ".slide",
    scrub: 3,
  },
});
