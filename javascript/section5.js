gsap.set(".sec-5-text", { yPercent : -10});
gsap.to(".sec-5-text", {
  yPercent: 90,
  ease: "none",
  scrollTrigger: {
    trigger: ".sec-5-text",
    start: "center 5%", 
    end: "+=300", 
    scrub: 2,
    duration:2,
  }, 
});



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