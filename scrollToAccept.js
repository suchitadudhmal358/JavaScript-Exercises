const terms = document.querySelector(".terms-and-condition");
const button = document.querySelector(".accept");

terms.addEventListener("scroll", function (e) {
  console.log(e.currentTarget.scrollTop);

  console.log(e.currentTarget.scrollHeight);
});
function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // console.log("Remove disabled");
    // ob.unobserve(terms.lastElementChild);
  } else {
    button.disabled = true;
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
ob.observe(terms.lastElementChild);
