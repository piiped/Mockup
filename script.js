function openNav() {
  document.getElementById("slide_nav").style.width = "250px";
};

function closeNav() {
  document.getElementById("slide_nav").style.width = "0";
};

var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitType(".titleGreathorned", {split:"words,chars"}), 
    chars = SplitGreat.chars;
tlSplitGreat.from(chars, {
  duration: 0.2,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
}, "+=0");



// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if(elem) {
    if(e) e.preventDefault();
    gsap.to(window, {scrollTo: elem});
  }
}
document.querySelectorAll('a[href]').forEach(a => {
  a.addEventListener('click', e => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);

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

gsap.set(".bag", { yPercent: 50});
gsap.to(".bag", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".bag",
    scrub: 3
  }
});
gsap.set(".hanger", { yPercent: 20});
gsap.to(".hanger", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".hanger",
    scrub: 3
  }
});
gsap.set(".search", { yPercent: 0});
gsap.to(".search", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".search",
    start: "top 30%", 
    end: "bottom 10%", 
    scrub: 2
  }
});

gsap.set(".shirt-1", { yPercent: 50});
gsap.set(".shirt-2", { yPercent: 40});
gsap.set(".shirt-3", { yPercent: 50});
gsap.set(".shirt-5", { yPercent: 40});
gsap.set(".shirt-4", { yPercent: 50});
gsap.set(".shirt-7", { yPercent: 40});
gsap.set(".shirt-8", { yPercent: 50});
gsap.set(".shirt-9", { yPercent: 40});
gsap.set(".shirt-10", { yPercent: 40});
gsap.set(".shirt-6", { yPercent: 30});
gsap.to(".shirt-1", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-1",
    scrub: 1
  }, 
});

gsap.to(".shirt-2", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-2",
    scrub: 5
  }, 
});

gsap.to(".shirt-3", {
  yPercent:-50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-3",
    scrub: 2
  }, 
});
gsap.to(".shirt-5", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-5",
    scrub: 4
  }, 
});
gsap.to(".shirt-4", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-4",
    scrub: 3
  }, 
});
gsap.to(".shirt-7", {
  yPercent: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3
  }, 
});
gsap.to(".shirt-8", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3
  }, 
});
gsap.to(".shirt-9", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-7",
    scrub: 3
  }, 
});
gsap.to(".shirt-10", {
  yPercent: -60,
  ease: "none",
  scrollTrigger: {
    trigger: ".shirt-img-10",
    scrub: 3
  }, 
});

gsap.to(".shirt-6", {
  xPercent: -130, 
  yPercent: 300,
  rotation:-20*1,
  scale:1.5,
  transformOrigin: "right top", 
  ease: "none",
  normalizeScroll: true,
  scrollTrigger: {
    trigger: ".shirt-img-6",
    start: "center 10%", 
    end: "+=400", 
    scrub: 2,
    duration:2,
  }, 
});
gsap.set(".text-1", { yPercent: 160 });
gsap.to(".text-1", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-1",
    scrub: 1
  },
});
gsap.set(".line-1", { yPercent: 70 });
gsap.to(".line-1", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".line-1",
    scrub: 1
  },
});

gsap.set(".text-2", { yPercent: 120});
gsap.to(".text-2", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-2",
    scrub: 1
  },
});
gsap.set(".line-2", { yPercent: 70 });
gsap.to(".line-2", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".line-2",
    scrub: 1
  },
});

gsap.set(".text-3", { yPercent: 150});
gsap.to(".text-3", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-3",
    scrub: 1
  },
});
gsap.set(".line-3", { yPercent: 50 });
gsap.to(".line-3", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".line-3",
    scrub: 1
  },
});


gsap.set(".text-4", { yPercent: 110});
gsap.to(".text-4", {
  yPercent: -120,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-4",
    scrub: 1
  },
});
gsap.set(".line-4", { yPercent: 80 });
gsap.to(".line-4", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".line-4",
    scrub: 1
  },
});

gsap.set(".text-5", { yPercent: 30});
gsap.to(".text-5", {
  yPercent: -280,
  ease: "none",
  scrollTrigger: {
    trigger: ".text-5",
    scrub: 1
  },
});
gsap.set(".line-5", { yPercent: 30 });
gsap.to(".line-5", {
  yPercent: -110,
  ease: "none",
  scrollTrigger: {
    trigger: ".line-5",
    scrub: 1
  },
});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".c_1", {
  xPercent:90,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_1",
    scrub: 1,
  },
});
gsap.to(".c_2", {
  xPercent:-100,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_2",
    scrub: 2,
  },
});
gsap.to(".c_3", {
  xPercent:120,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_3",
    scrub: 4,
  },
});
gsap.to(".c_4", {
  xPercent:-250,
  ease: "none",
  scrollTrigger: {
    trigger: ".c_4",
    scrub: 5,
  },
});
gsap.to(".btf", {
  xPercent:-250,
  ease: "none",
  scrollTrigger: {
    trigger: ".btf",
    scrub: 2,
  },
});

gsap.set(".cloud_cover", { yPercent: 20});
gsap.to(".cloud_cover", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".cloud_cover",
    scrub: 3
  }
});

// gsap.set(".sec-5-text1", { yPercent: -60});
// gsap.to(".sec-5-text1", {
//   yPercent: 70,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".sec-5-text1",
//     scrub: 1
//   }
// });

// gsap.set(".sec-5-text2", { yPercent: 100});
// gsap.to(".sec-5-text2", {
//   yPercent: 350,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".sec-5-text2",
//     scrub: 1
   
//   }
// });