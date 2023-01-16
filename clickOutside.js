const cardBtn = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardBtnClick(event) {
  //   console.log("Ya Clicked it");
  const button = event.currentTarget;
  const card = button.closest(".card");
  //grab the img
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  //   console.log(desc);
  const name = card.querySelector("h2").textContent;
  //populate the modal

  modalInner.innerHTML = `
  <img width= "600" height= "600" src= "${imgSrc.replace(
    "200",
    "600"
  )}" alt="${name}"/>
  <p>${desc}</p>`;
  modalOuter.classList.add("open");
}
cardBtn.forEach((button) =>
  button.addEventListener("click", handleCardBtnClick)
);

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  //   console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
