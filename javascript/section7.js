// gsap.set(".sec-6", { yPercent: -10 });
// gsap.to(".sec-6", {
//   yPercent: -90,
//   ease: "power1.out",
//   scrollTrigger: {
//     trigger: ".sec-6",
//     start: "top -10%",
//     end: "+=200",
//     scrub: 3,
//     duration: 3,
//   },
// });

gsap.set(".h09_hand", { yPercent: -20 });
gsap.to(".h09_hand", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".h09_hand",
    scrub: 1,
  },
});

gsap.set(".h10_shirt", { yPercent: -20 });
gsap.to(".h10_shirt", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".h10_shirt",
    scrub: 2,
  },
});

gsap.set(".h05_shirt1", { yPercent: 20 });
gsap.to(".h05_shirt1", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".h05_shirt1",
    scrub: 1,
  },
});

gsap.set(".h06_shirt2", { yPercent: 30 });
gsap.to(".h06_shirt2", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".h06_shirt2",
    scrub: 2,
  },
});

const sec7_1 = gsap.timeline({
  defaults: { ease: "power2.out" },
  scrollTrigger: {
    trigger: ".sec-7",
    scrub: 3,
    start: "top-=200",
    end: "top+=200",
    // markers: true,
  },
});

sec7_1
  .from(".h09_hand", { duration: 1, y: "80%" }, "-=0.6")
  .from(".h10_shirt", {
    duration: 1,
    opacity: 0,
    // scale: 0,
    y: "80%",
    rotate: -10,
  })
  .from(".right-text", { duration: 1, stagger: 0.2, opacity: 0 }, "-=0.6")
  .from(".h12_flash", {
    duration: 1,
    opacity: 0,
    // scale: 0,
    y: "50%",
    x: "-50%",
  })
  .from(".h08_money", {
    duration: 1,
    opacity: 0,
    // scale: 0,
    y: "80%",
  })
  .from(
    ".trend",
    {
      duration: 1,
      stagger: 0.2,
      opacity: 0,
      //  scale: 0
    },
    "-=0.6"
  );

const sec7_2 = gsap.timeline({
  defaults: { ease: "power2.out" },
  scrollTrigger: {
    trigger: ".sec-7-container-1",
    scrub: 3,
    start: "bottom-=200",
    end: "bottom+=200",
    // markers: true,
  },
});

sec7_2
  .from(".h01_paper", { duration: 2, opacity: 0, scale: 0 }, "-=0.6")
  .from(".left-text-1", { duration: 3, opacity: 0 }, "-=0.6")
  .from(
    ".h03_bin",
    {
      duration: 2,
      opacity: 0,
      // scale: 0,
      y: "20%",
    },
    "-=0.6"
  )
  .from(
    ".h04_lid",
    {
      duration: 2,
      opacity: 0,
      // scale: 0,
      y: "20%",
      rotation: -20,
    },
    "-=0.6"
  )

  .from(".left-text-2", { duration: 3, opacity: 0 }, "-=0.6")

  .from(
    ".h05_shirt1",
    {
      duration: 2,
      opacity: 0,
      // scale: 0,
      y: "50%",
    },
    "-=0.6"
  )
  .from(
    ".h06_shirt2",
    {
      duration: 2,
      opacity: 0,
      // scale: 0,
      y: "50%",
    },
    "-=0.6"
  )
  .from(".left-text-3", { duration: 3, opacity: 0 }, "-=0.6")
  .from(
    ".h07_old",
    {
      duration: 2,
      opacity: 0,
      // scale: 0
    },
    "-=0.6"
  )
  .from(".h02_star", {
    duration: 2,
    opacity: 0,
    //  scale: 0
  })
  .from(
    ".h07_cry",
    {
      duration: 2,
      stagger: 0.2,
      opacity: 0,
      //  scale: 0
    },
    "-=0.6"
  );
