// scrollToHash(window.location.hash);

// gsap.registerPlugin(ScrollTrigger);
// gsap.to("progress", {
//   value: 100,
//   ease: "none",
//   scrollTrigger: { scrub: 0.3 },
// });

// When the user scrolls the page, execute pageScroll function
window.onscroll = function () {
  pageScroll();
};

function pageScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("proBar").style.width = scrolled + "%";
}
