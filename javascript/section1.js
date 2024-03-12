gsap.registerPlugin(ScrollTrigger);
gsap.set(".wrapper_2", { yPercent: 0 });
gsap.to(".wrapper_2", {
  xPercent: -50,
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper_2",
    start: "top 30%",
    end: "bottom ",
    scrub: 2,
  },
});

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.to(".loader", { y: "0%", duration: 1.6 });
tl.to(".slider", { y: "-100%", duration: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

tl.from(".bg", { y: "100%", duration: 2 }, "-=1");

tl.from(".wrapper_3", { y: "100%", duration: 1 }, "-=1");
tl.from(".paper_1", { scale: 0, duration: 1 }, "-=1").from(
  ".fast-text",
  { y: "100%", duration: 0.5, stagger: 0.2, opacity: 0 },
  "-=0.6"
);

tl.from(".paper_2", { scale: 0, duration: 1 }, "-=1").from(
  ".fash-text",
  { y: "100%", duration: 0.5, stagger: 0.2, opacity: 0 },
  "-=0.6"
);
tl.from(
  ".wrapper_2",
  {
    y: "-100%",
    duration: 1,
    stagger: 0.5,
    opacity: 0,
  },
  "-=1.5"
)
  .from(".wrapper_1", { y: "-140%", duration: 1.5 }, "-=1.6")
  .from(".braek", { scale: 0, duration: 0.6 }, "-=0.5")
  .from(".caption", { scale: 0, duration: 0.6 }, "-=0.5");
