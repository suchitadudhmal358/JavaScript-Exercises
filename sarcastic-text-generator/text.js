const textarea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

const filters = {
  sarcastic: function (letter, index) {
    // console.log(letter, index);
    if (index % 2) {
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  },
  //   funny: function () {},
  unable: function (letter) {
    const random = Math.floor(Math.random() * 3);

    if (letter === " " && random === 2) {
      return "....";
    }
    return letter;
  },
};

function transformText(text) {
  //   console.log(text);
  //   const filter = document.querySelector('[name="filter"]:checked').value;
  const filter = filterInputs.find((input) => input.checked).value;
  //   console.log(filter);
  const mod = Array.from(text).map(filters[filter]);
  //   console.log(mod);
  result.textContent = mod.join("");
}

textarea.addEventListener("input", (e) => transformText(e.target.value));
filterInputs.forEach((input) =>
  input.addEventListener("input", () => {
    transformText(textarea.value);
  })
);
