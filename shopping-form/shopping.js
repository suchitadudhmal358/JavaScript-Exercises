const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitted !!!");
  const name = e.currentTarget.item.value;
  //if input is empty the do not submit
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  e.target.reset();
  // displayItems();
  // do it with custom events
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
  //   console.log(name);
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      (item) => `<li class="shopping-item">
  <input type="checkbox"
  value = "${item.id}"
  ${item.complete && "checked"} 
  >
  <span class="itemName">${item.name}</span>
  <button aria-label="Remove ${item.name}"
  value = "${item.id}"
  >&times;</button>
  </li>`
    )
    .join("");
  // console.log(html);
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info("Saving items to the local storage");
  // console.log(JSON.stringify(items));
  localStorage.setItem("items", JSON.stringify(items));
}

//restore items from localStorage
function restoreFromLocalStorage() {
  console.info("Restoring from local storage");
  const lsItems = JSON.parse(localStorage.getItem("items"));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach((item) => items.push(item));
    // items.push(lsItems[0], lsItem[1]);
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
}

function deleteItem(id) {
  console.info("Deleting Item", id);
  items = items.filter((item) => item.id !== id);
  // console.log(items);
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function markAsComplete(id) {
  console.info("Marking as completed", id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);

list.addEventListener("click", function (e) {
  // console.log(e.target, e.currentTarget);
  const id = parseInt(e.target.value);
  if (e.target.matches("button")) {
    deleteItem(id);
  }

  if (e.target.matches("input[type='checkbox']")) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
