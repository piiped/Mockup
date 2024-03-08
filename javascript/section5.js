gsap.set(".sec-5-text", { yPercent : -10});
gsap.to(".sec-5-text", {
  yPercent: 250,
  ease: "none",
  scrollTrigger: {
    trigger: ".sec-5-text",
    start: "center 5%", 
    end: "+=800", 
    scrub: 2,
    duration:2,
    markers: true
  }, 
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box3", {
  scale: 2,
  transformOrigin: "center center",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".box1",
    start: "top top",
    end: "+=300",
    markers: true,
    scrub: 3
  }
});

//zoom
gsap.to(".box3", {
  scale: 7,
  transformOrigin: "center center",
  ease: "power1.inOut",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".box2",
    start: "top top",
    end: "+=300",
    markers: true,
    scrub: 3
  }
});

//zoom
// gsap.to(".group", {
//   scale: 2,
//   transformOrigin: "left left",
//   ease: "power1.inOut",
//   scrollTrigger: {
//     trigger: ".group",
//     start: "top top",
//     end: "+=300",
//     markers: true,
//     scrub: 0.5
//   }
// });

// //zoom
// gsap.to(".group", {
//   scale: 7,
//   transformOrigin: "center center",
//   ease: "power1.inOut",
//   immediateRender: false,
//   scrollTrigger: {
//     trigger: ".group",
//     start: "center 50%",
//     end: "+=300",
//     markers: true,
//     scrub: 0.5
//   }
// });

// gsap.set(".group", { yPercent : 0});
// gsap.to(".group", {
//   xPercent: 0, 
//   yPercent: -10,
//   scale: 1.5,
//   transformOrigin: "left top", 
//   ease: "none",
//   normalizeScroll: true,
//   scrollTrigger: {
//     trigger: ".group",
//     start: "top 10%", 
//     end: "top 15%", 
//     scrub: 1,
//     duration:10,
//     markers: true
//   }, 
// });


// gsap.set(".parallax-image", { yPercent : 0});
// gsap.to(".parallax-image", {
//   xPercent: 0, 
//   yPercent: -10,
//   scale: 1.5,
//   transformOrigin: "left top", 
//   ease: "none",
//   normalizeScroll: true,
//   scrollTrigger: {
//     trigger: ".parallax-image",
//     start: "top 10%", 
//     end: "top 15%", 
//     scrub: 1,
//     duration:10,
//     markers: true
//   }, 
// });

// gsap.to(".parallax-image", {
//   xPercent: 0, 
//   yPercent: -10,
//   scale: 1.5,
//   transformOrigin: "right top", 
//   ease: "none",
//   normalizeScroll: true,
//   scrollTrigger: {
//     trigger: ".parallax-image",
//     start: "center 25%", 
//     end: "center 60%", 
//     scrub: 1,
//     duration:5,
//     markers: true
//   }, 
// });


