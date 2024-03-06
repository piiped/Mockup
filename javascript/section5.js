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

ScrollTrigger.create({
  trigger: ".parallax",
  start: "top-=50px top",
  end: "bottom+=1000px top",
  pin: ".sec-5",
  ease: "power1.out",
  scale: 0,
  markers: {
    startColor: "white",
    endColor: "white",
    fontSize: "18px",
    fontWeight: "bold",
    indent: 20,
  },
});

gsap.set(".parallax", { scale: 1, yPercent: 0, xPercent: 0 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".parallax",
    scrub: 1,
    start: "top+=250px top",
    // end: "bottom+=50px bottom",
    end: "bottom+=1000",
    markers: true,
  },
});

tl.to(".parallax", {
  yPercent: 5,
  xPercent: 24,
  scale: 1.5,
  ease: "power1.out",
  duration: 3,
})

  .to(".banner", {
    opacity: 1,
    duration: 1,
  })
  .delay(5)
  .to(".banner", {
    opacity: 0,
    duration: 1,
  })

  .to(".parallax", {
    yPercent: 5,
    xPercent: -24,
    scale: 1.5,
    ease: "power1.out",
    duration: 3,
  })
  .to(".banner", {
    opacity: 1,
    duration: 2,
  })
  .delay(5)
  .to(".banner", {
    opacity: 0,
    duration: 2,
  })
  .to(".parallax", {
    yPercent: -20,
    xPercent: -26,
    scale: 1.5,
    ease: "none",
    duration: 3,
  })
  .to(".parallax", {
    yPercent: -48,
    xPercent: -26,
    scale: 1.5,
    ease: "none",
    duration: 3,
  })
  .to(".parallax", {
    xPercent: 24,
    scale: 1.5,
    ease: "none",
    duration: 3,
  })
  .to(".parallax", {
    yPercent: -8,
    xPercent: 0,
    scale: 1,
    ease: "power1.out",
    duration: 3,
  })
  .to(".parallax", {
    yPercent: -8,
    xPercent: 0,
    scale: 1,
    ease: "none",
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
