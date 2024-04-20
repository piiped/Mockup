ScrollTrigger.create({
  trigger: ".sec-8-container",
  start: "top-100px top",
  end: "bottom+=1000 top",
  pin: ".sec-8-container",
  ease: "power1.out",
  scale: 0,
  // markers:true,
  // markers: {
  //   startColor: "white",
  //   endColor: "white",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   indent: 20,
  // },
});

//  TODO: สร้าง timeline ปรับ motion
gsap.set(".quote_chat1", { yPercent: 10 });
gsap.to(".quote_chat1", {
  yPercent: -10,
  duration: 2,
  scrollTrigger: {
    trigger: ".quote_chat1",
    scrub: 2,
    start: "top 70%",
    end: "+=50",
  },
});

gsap.set(".quote_chat2", { yPercent: 30 });
gsap.to(".quote_chat2", {
  yPercent: -10,
  duration: 3,
  scrollTrigger: {
    trigger: ".quote_chat2",
    scrub: 2,
    start: "top 70%",
    end: "+=50",
  },
});

gsap.set(".i05_hero", { xPercent: 0 });
gsap.to(".i05_hero", {
  xPercent: 150,
  scrollTrigger: {
    trigger: ".i05_hero",
    scrub: 0,
  },
});
