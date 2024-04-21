ScrollTrigger.create({
  trigger: ".sec-8-container",
  start: "top top",
  end: "bottom+=1000 top",
  pin: ".sec-8-container",
  ease: "power1.out",
  scale: 0,
  // markers: true,
  // markers: {
  //   startColor: "white",
  //   endColor: "white",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   indent: 20,
  // },
});

// gsap.set(".quote_chat1", { yPercent: 10 });
// gsap.to(".quote_chat1", {
//   yPercent: -10,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".quote_chat1",
//     scrub: 2,
//     start: "top 70%",
//     end: "+=50",
//   },
// });

// gsap.set(".quote_chat2", { yPercent: 30 });
// gsap.to(".quote_chat2", {
//   yPercent: -10,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".quote_chat2",
//     scrub: 2,
//     start: "top 70%",
//     end: "+=50",
//   },
// });

// gsap.set(".i05_hero", { xPercent: 0 });
// gsap.to(".i05_hero", {
//   xPercent: 150,
//   scrollTrigger: {
//     trigger: ".i05_hero",
//     scrub: 0,
//   },
// });
gsap.set(".quote_chat1", { yPercent: 25, opacity: 0 });
gsap.set(".quote_chat2", { yPercent: 20, opacity: 0 });

const sec8 = gsap.timeline({
  defaults: { ease: "power2.out" },
  scrollTrigger: {
    trigger: ".sec-8-container",
    scrub: 3,
    start: "top-=300 top",
    end: "bottom+=1000 top",
    // markers: true,
  },
});

sec8
  .from(".sec-8-title", { duration: 0.5, opacity: 0, y: "50%" }, "-=0.6")
  .from(".sec-8-img", { duration: 0.5, opacity: 0, y: "50%" }, "-=0.6")
  .to(".quote_chat1", { duration: 0.3, opacity: 1, y: "-10%" })
  .to(".quote_chat2", { duration: 0.3, opacity: 1, y: "-10%" })
  .to(
    ".i05_hero",
    { duration: 1, y: "-220%", x: "400%", rotation: 25 },
    "+=0.2"
  )
  .to(".sec-8-img", { duration: 0.5, y: "-30%", rotation: -25 }, "-=0.8")
  .to(".quote_chat1", { duration: 0.2, y: "50%", rotation: 25 }, "-=0.6");
