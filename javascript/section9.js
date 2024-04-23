gsap.set(".sec-9-title1", { yPercent: 100 });
gsap.to(".sec-9-title1", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "sec-9-title1",
    scrub: 2,
  },
});
gsap.set(".sec-9-title2", { yPercent: 20 });
gsap.to(".sec-9-title2", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "sec-9-title2",
    scrub: 2,
  },
});

const sec9 = gsap.timeline({
  defaults: { ease: "power2.out" },
  scrollTrigger: {
    trigger: ".sec-9",
    scrub: 3,
    start: "top bottom-=200",
    end: "top+=200",
  },
});

sec9.from(
  ".front",
  { duration: 2, opacity: 0, scale: 0, stagger: 0.2 },
  "-=0.6"
);
