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

//change color of navbar
document.addEventListener("scroll", function () {
  const sec2 = document.querySelector("#section2");
  const sec6 = document.querySelector("#section6");
  const befsec6 = document.querySelector("#befsec6");
  const sec8 = document.querySelector("#section8");
  const hood = document.querySelector("#hood");
  const nav = document.querySelector(".icon");
  var img = document.getElementById("logoweb");

  if (
    sec2.getBoundingClientRect().top <= 0 &&
    sec2.getBoundingClientRect().bottom > 0
  ) {
    nav.classList.add("dark");
    img.src = "/img/assets/logowhite.png";
  } else if (
    sec6.getBoundingClientRect().top <= 0 &&
    sec6.getBoundingClientRect().bottom > 0
  ) {
    nav.classList.add("dark");
    img.src = "/img/assets/logowhite.png";
  } else if (
    befsec6.getBoundingClientRect().top <= 0 &&
    befsec6.getBoundingClientRect().bottom > 0
  ) {
    nav.classList.add("dark");
    img.src = "/img/assets/logowhite.png";
  } else if (
    sec8.getBoundingClientRect().top <= 0 &&
    sec8.getBoundingClientRect().bottom > 0
  ) {
    nav.classList.add("dark");
    img.src = "/img/assets/logowhite.png";
  } else if (
    hood.getBoundingClientRect().top <= 250 &&
    hood.getBoundingClientRect().bottom > 0
  ) {
    img.src = "/img/assets/logowhite.png";
    console.log("hood");
  } else {
    nav.classList.remove("dark");
    img.src = "/img/assets/logo.png";
  }
});
