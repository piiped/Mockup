gsap.registerPlugin(ScrollTrigger);
gsap.to(".c_1", {
  xPercent:50,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_1",
    scrub: 1,
  },
});
gsap.to(".c_2", {
  xPercent:-50,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_2",
    scrub: 2,
  },
});
gsap.to(".c_3", {
  xPercent:70,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_3",
    scrub: 4,
  },
});
gsap.to(".c_4", {
  xPercent:-50,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_4",
    scrub: 5,
  },
});
gsap.to(".btf", {
  xPercent:-350,
  ease: "none",
  scrollTrigger: {
    trigger: ".btf",
    scrub: 5,
  },
});

gsap.set(".cloud_cover", { yPercent: 0});
gsap.to(".cloud_cover", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".cloud_cover",
    scrub: 3,
  }
});
