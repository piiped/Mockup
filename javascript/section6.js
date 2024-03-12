gsap.set(".sec-5-bg", { yPercent: -20 });
gsap.to(".sec-5-bg", {
  yPercent: -120,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".sec-5-bg",
    start: "top -10%",
    end: "+=400",
    scrub: 3,
    duration: 3,
  },
});

// gsap.set(".sec-5-title", { yPercent: 0 });
// gsap.to(".sec-5-title", {
//   yPercent: -100,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".sec-5-title",
//     start: "center",
//     end: "bottom",
//     scrub: 3,
//     duration: 3,
//     markers:true,
//   },
// });



gsap.set(".sec-6-title", {scale: 1, yPercent: 0, xPercent: 0 });
// gsap.to(".sec-6-title", {
//   yPercent: -100,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".sec-6-title",
//     start: "top",
//     end: "top 50%",
//     scrub: 3,
//     duration: 3,
//     markers:true,
//   },
// });

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sec-6-title",
//     scrub:3,
//     start: "top+=250px top",
//     // end: "bottom+=50px bottom",
//     end: "bottom+=2000",
//     // markers: true,
//   },
// });

// tl.to(".sec-6-title", {
//   yPercent: 5,
//   ease: "sec-6-title",
//   duration: 2,
// })

// .to(".parallax", {
//   yPercent: 22,
//   ease: "power4.out",
//   duration: 2,
// })


// Omitted commented section for brevity

gsap.set(".sec-6-title", { yPercent: -50, scale: 1 });

// Omitted commented section for brevity

const scrollTimeline = gsap.timeline({ 
  scrollTrigger: {
    trigger: ".sec-6-title",
    scrub: 2,
    start: "top",
    end: "center+=300",
    markers:true,
  },
});

scrollTimeline.to(".sec-6-title", {
  yPercent: -90,
  ease: "none",
  duration: 2,
})

.to(".sec-6-title", {
  yPercent: -40,
  scale:0.8,
  ease: "power4.out",
  duration: 3,
});