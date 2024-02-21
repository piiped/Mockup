gsap.set(".bag", { yPercent: 50});
gsap.to(".bag", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".bag",
    scrub: 3
  }
});
gsap.set(".hanger", { yPercent: 20});
gsap.to(".hanger", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".hanger",
    scrub: 3
  }
});
gsap.set(".search", { yPercent: 0});
gsap.to(".search", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".search",
    start: "top 30%", 
    end: "bottom 10%", 
    scrub: 2
  }
});