gsap.registerPlugin(ScrollTrigger);

gsap.set(".wrapper_2", {yPercent:0});
gsap.to(".wrapper_2", {
  xPercent: -50, 
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper_2",
    start: "top 30%", 
    end: "bottom ", 
    scrub: 2
  }
});