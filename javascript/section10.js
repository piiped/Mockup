gsap.set(".sec-10-title", { yPercent: 50 });
gsap.to(".sec-10-title", {
  yPercent:0,
  ease: "none",
  scrollTrigger: {
    trigger: ".sec-10-title",
    scrub: 2,
  },
});