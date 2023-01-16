function Gallary(gallary) {
  //   console.log(gallary);
  if (!gallary) {
    throw new Error("No gallary found");
  }

  //select the img elements
  const images = Array.from(gallary.querySelectorAll("img"));
  //   console.log(images);
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  let currentImage;

  function openModal() {
    console.info("Opening Modal...");
    if (modal.matches(".open")) {
      console.log("Modal already open");
      return;
    }
    modal.classList.add("open");
    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImg);
    prevButton.addEventListener("click", showPrevImg);
  }

  function closeModal() {
    modal.classList.remove("open");
    window.removeEventListener("keyup", handleKeyUp);
    nextButton.removeEventListener("click", showNextImg);
    prevButton.removeEventListener("click", showPrevImg);
  }

  function handleclickEvent(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Escape") closeModal();
  }

  function showNextImg() {
    showImage(currentImage.nextElementSibling || gallary.firstElementChild);
  }

  function showPrevImg() {
    showImage(currentImage.previousElementSibling || gallary.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    console.log(el);
    modal.querySelector("img").src = el.src;
    modal.querySelector("h2").textContent = el.title;
    modal.querySelector("figure p").textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  images.forEach((image) =>
    image.addEventListener("click", (e) => showImage(e.currentTarget))
  );
  modal.addEventListener("click", handleclickEvent);
}

const gallary1 = Gallary(document.querySelector(".gallary1"));
const gallary2 = Gallary(document.querySelector(".gallary2"));
