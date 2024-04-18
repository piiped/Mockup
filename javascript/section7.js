gsap.set(".sec-6-bg", { yPercent: -10 });
gsap.to(".sec-6-bg", {
  yPercent: -90,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".sec-6-bg",
    start: "top -10%",
    end: "+=200",
    scrub: 3,
    duration: 3,
  },
});

gsap.set(".h09_hand", { yPercent: -20});
gsap.to(".h09_hand", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".h09_hand",
    scrub: 1
  },
});

gsap.set(".h10_shirt", { yPercent: -20});
gsap.to(".h10_shirt", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".h10_shirt",
    scrub: 2
  },
});

gsap.set(".h05_shirt1", { yPercent: 20});
gsap.to(".h05_shirt1", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".h05_shirt1",
    scrub: 1
  },
});

gsap.set(".h06_shirt2", { yPercent: 30});
gsap.to(".h06_shirt2", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".h06_shirt2",
    scrub: 2
  },
});
