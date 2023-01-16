const div = document.createElement("div");
div.classList.add("wrapper");
document.body.appendChild(div);

//make an ul list
const ul = `<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>`;
div.innerHTML = ul;

//create img
const img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.width = 250;
img.classList.add("cute");
img.alt = "cute puppy";
div.appendChild(img);

const myHtml = `
<div class="myDiv">
<p>Paragraph one</p>
<p>Paragraph two</p>
</div>`;

const ulElement = div.querySelector("ul");
console.log(ulElement);
ulElement.insertAdjacentHTML("beforebegin", myHtml);

const myDiv = div.querySelector(".myDiv");
myDiv.children[1].classList.add("warning");
myDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height) {
  const html = `
    <div class='playerCard'>
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class='delete'>&times Delete</button>
    </div>`;
  return html;
}

const cards = document.createElement("div");
cards.classList.add("cards");
let cardHTML = generatePlayerCard("wes", 20, 150);
cardHTML = cardHTML + generatePlayerCard("bos", 20, 150);
cardHTML = cardHTML + generatePlayerCard("kait", 20, 150);
cardHTML = cardHTML + generatePlayerCard("scott", 20, 150);
cards.innerHTML = cardHTML;

div.insertAdjacentElement("beforebegin", cards);

const button = document.querySelectorAll(".delete");

function deleteCard(event) {
  const clickedBtn = event.currentTarget;
  //   console.log(clickedBtn);
  //   clickedBtn.parentElement.remove();
  clickedBtn.closest(".playerCard").remove();
}

button.forEach((button) => button.addEventListener("click", deleteCard));
