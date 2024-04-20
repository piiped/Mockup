function openNav() {
  document.getElementById("slide_nav").style.width = "18.302vw";
}

function closeNav() {
  document.getElementById("slide_nav").style.width = "0";
}

var tlSplitGreat = gsap.timeline({
    onComplete: () => {
      SplitGreat.revert();
    },
  }),
  SplitGreat = new SplitType(".titleGreathorned", { split: "words,chars" }),
  chars = SplitGreat.chars;
tlSplitGreat.from(
  chars,
  {
    duration: 0.2,
    opacity: 0,
    y: 10,
    ease: "circ.out",
    stagger: 0.02,
  },
  "+=0"
);

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);
