gsap.set(".shirt-1", { yPercent: 50 });
gsap.set(".shirt-2", { yPercent: 40 });
gsap.set(".shirt-3", { yPercent: 50 });
gsap.set(".shirt-5", { yPercent: 40 });
gsap.set(".shirt-4", { yPercent: 50 });
gsap.set(".shirt-7", { yPercent: 40 });
gsap.set(".shirt-8", { yPercent: 50 });
gsap.set(".shirt-9", { yPercent: 40 });
gsap.set(".shirt-10", { yPercent: 40 });
gsap.set(".shirt-6", { yPercent: 30 });
gsap.to(".shirt-1", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-1",
    scrub: 1,
  },
});
gsap.to(".shirt-2", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-2",
    scrub: 5,
  },
});
gsap.to(".shirt-3", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-3",
    scrub: 2,
  },
});
gsap.to(".shirt-5", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-5",
    scrub: 4,
  },
});
gsap.to(".shirt-4", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-4",
    scrub: 3,
  },
});
gsap.to(".shirt-7", {
  yPercent: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3,
  },
});
gsap.to(".shirt-8", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3,
  },
});
gsap.to(".shirt-9", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3,
  },
});
gsap.to(".shirt-10", {
  yPercent: -60,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-10",
    scrub: 3,
  },
});
gsap.to(".shirt-6", {
  xPercent: -130,
  yPercent: 300,
  rotation: -20 * 1,
  scale: 1.5,
  transformOrigin: "right top",
  ease: "none",
  normalizeScroll: true,
  scrollTrigger: {
    trigger: ".shirt-img-6",
    start: "center 10%",
    end: "+=400",
    scrub: 2,
    duration: 2,
  },
});
gsap.set(".text-1", { yPercent: 160 });
gsap.to(".text-1", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-1",
    scrub: 1,
  },
});

gsap.set(".text-2", { yPercent: 120 });
gsap.to(".text-2", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-2",
    scrub: 1,
  },
});

gsap.set(".text-3", { yPercent: 150 });
gsap.to(".text-3", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-3",
    scrub: 1,
  },
});

gsap.set(".text-4", { yPercent: 110 });
gsap.to(".text-4", {
  yPercent: -120,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-4",
    scrub: 1,
  },
});
gsap.set(".text-5", { yPercent: 30 });
gsap.to(".text-5", {
  yPercent: -280,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-5",
    scrub: 1,
  },
});

// gsap.set(".BornHS__Modal__Input", { yPercent: 30 });
// gsap.to(".BornHS__Modal__Input", {
//   yPercent: -10,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".BornHS__Modal__Input",
//     scrub: 1
//   },
// });

gsap.set(".BornHS__Modal__Input", { opacity: 0, scale: 0, yPercent: 0 });
gsap.to(".BornHS__Modal__Input", {
  opacity: 1,
  scale: 1,
  stagger: 0.3,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".shirt",
    scrub: 1,
    start: "top center",
    end: "bottom bottom ",
    markers: true,
  },
});
