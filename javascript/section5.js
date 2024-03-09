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

// gsap.set(".parallax", { yPercent: 10 });
// gsap.to(".parallax", {
//   yPercent: 0,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallax",
//     scrub: 1,
//     start: "top bottom",
//     end: " +=100",
//     // markers: true,
//   },
// });

//pin ให้sec5 อยู่กับหน้าจอ
ScrollTrigger.create({
  trigger: ".parallax",
  start: "top-=50px top",
  end: "bottom+=2100 top",
  pin: ".sec-5",
  ease: "power1.out",
  scale: 0,
  // markers: {
  //   startColor: "white",
  //   endColor: "white",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   indent: 20,
  // },
});

gsap.set(".parallax", { scale: 1, yPercent: 0, xPercent: 0 });

//สร้าง timeline ให้กับ parallax
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".parallax",
    scrub: 1,
    start: "top+=250px top",
    // end: "bottom+=50px bottom",
    end: "bottom+=2000",
    // markers: true,
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
    ease: "power1.out",
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
    xPercent: -26,
    scale: 1.5,
    ease: "none",
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
    xPercent: -26,
    scale: 1.5,
    ease: "none",
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
    ease: "none",
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
    yPercent: -8,
    xPercent: 0,
    scale: 1,
    ease: "power1.out",
    duration: 2,
  })
  .to(".parallax", {
    duration: 1,
  });

// gsap.set(".parallax", { scale: 1, yPercent: 0, xPercent: 0 });
// gsap.to(".parallax", {
//   yPercent: 10,
//   xPercent: 22,
//   scale: 1.5,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallax",
//     scrub: 1,
//     start: "top+=250px top",
//     end: "bottom+=50px bottom",
//     markers: true,
//   },
// });

// const parallaxImage = document.querySelector('.parallax-image');

// window.addEventListener('scroll', () => {
//   const scrollTop = window.pageYOffset;
//   const imageY = scrollTop * 0.5;

//   parallaxImage.style.transform = `translate(-50%, ${imageY}px)`;

//   if (scrollTop > 50) {
//     parallaxImage.classList.add('active');
//   } else {
//     parallaxImage.classList.remove('active');
//   }
// });
