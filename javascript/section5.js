gsap.set(".sec-5-text", { yPercent: 0 });
gsap.to(".sec-5-text", {
  yPercent: 135,
  ease: "none",
  scrollTrigger: {
    trigger: ".sec-5-text",
    start: "center 5%",
    end: "+=80",
    scrub: 2,
    duration: 2,
  },
});

ScrollTrigger.create({
  trigger: ".parallax",
  start: "top-=50px top",
  end: "bottom+=2000 top",
  pin: ".sec-5",
  ease: "power1.out",
  scale: 0,
});

gsap.set(".parallax", { scale: 1, yPercent: 0, xPercent: 0 });
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".parallax",
    scrub: 1,
    start: "top+=250px top",
    end: "bottom+=1500",
  },
});

tl5
  .to(".parallax", {
    yPercent: 5,
    xPercent: 20,
    scale: 1.5,
    ease: "power1.out",
    duration: 2,
  })
  .to(".sec-5-text", { opacity: 1 })
  .to(".sec-5-text", { opacity: 0 })
  .to("#sec5-1", {
    opacity: 1,
    duration: 1,
  })
  .to(".parallax", {
    duration: 2,
  })
  .to("#sec5-1", {
    opacity: 0,
    duration: 1,
  })

  .to(".parallax", {
    yPercent: 22,
    xPercent: -22,
    scale: 1.5,
    ease: "power4.out",
    duration: 2,
  })

  .to("#sec5-2", {
    opacity: 1,
    duration: 2,
  })
  .to(".parallax", {
    duration: 2,
  })
  .to("#sec5-2", {
    opacity: 0,
    duration: 2,
  })

  .to(".parallax", {
    yPercent: -10,
    xPercent: -25,
    scale: 1.5,
    ease: "power4.out",
    duration: 2,
  })
  .to("#sec5-3", {
    opacity: 1,
    duration: 1,
  })
  .to(".parallax", {
    duration: 2,
  })
  .to("#sec5-3", {
    opacity: 0,
    duration: 1,
  })

  .to(".parallax", {
    yPercent: -48,
    xPercent: -25,
    scale: 1.5,
    ease: "power4.out",
    duration: 2,
  })
  .to("#sec5-4", {
    opacity: 1,
    duration: 1,
  })
  .to(".parallax", {
    duration: 2,
  })
  .to("#sec5-4", {
    opacity: 0,
    duration: 1,
  })

  .to(".parallax", {
    xPercent: 12,
    scale: 1.5,
    ease: "power4.out",
    duration: 2,
  })
  .to("#sec5-5", {
    opacity: 1,
    duration: 1,
  })
  .to(".parallax", {
    duration: 2,
  })
  .to("#sec5-5", {
    opacity: 0,
    duration: 1,
  })
  .to(".parallax", {
    scale: 1,
    yPercent: 0,
    xPercent: 0,
    ease: "power4.out",
    duration: 2,
  })
  .to(".parallax", {
    duration: 1,
  });
