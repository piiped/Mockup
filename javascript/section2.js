gsap.set(".bag", { yPercent: 50 });
gsap.to(".bag", {
  yPercent: -70,
  ease: "none",
  scrollTrigger: {
    trigger: ".bag",
    scrub: 3,
  },
});
gsap.set(".hanger", { yPercent: 50 });
gsap.to(".hanger", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".hanger",
    scrub: 3,
  },
});
gsap.set(".search", { yPercent: -10 });
gsap.to(".search", {
  yPercent: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".search",
    start: "top 30%",
    end: "bottom 10%",
    scrub: 2,
  },
});
