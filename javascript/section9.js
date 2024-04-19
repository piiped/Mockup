gsap.set(".sec-9-title1", { yPercent: 100 });
gsap.to(".sec-9-title1", {
  yPercent:0,
  ease: "none",
  scrollTrigger: {
    trigger: "sec-9-title1",
    scrub: 2,
  },
});
gsap.set(".sec-9-title2", { yPercent: 20 });
gsap.to(".sec-9-title2", {
  yPercent:0,
  ease: "none",
  scrollTrigger: {
    trigger: "sec-9-title2",
    scrub: 2,
  },
});
