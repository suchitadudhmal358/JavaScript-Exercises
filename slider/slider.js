function Slider(slider) {
  //   console.log(slider);
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }

  let prev;
  let current;
  let next;

  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log(current, prev, next);
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.re;
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === "back") {
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();

  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);
}

mySlider = Slider(document.querySelector(".slider"));
dogSlider = Slider(document.querySelector(".dog-slider"));
