const tabs = document.querySelector(".tabs");
const tabButtons = document.querySelectorAll('[role = "tab"]');
// const tabPanels = tabs.querySelectorAll('[role = "tabpanel"]'); // for method 1
const tabPanels = Array.from(tabs.querySelectorAll('[role = "tabpanel"]')); //for method 2

function handleClick(event) {
  //   console.log(event.currentTarget);
  // hide all tabpanel
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  //unselect all tabs
  tabButtons.forEach((buttons) => {
    buttons.setAttribute("aria-selected", false);
  });
  // mark clicked tab as selected
  event.currentTarget.setAttribute("aria-selected", true);
  const id = event.currentTarget.id;
  console.log(id);
  //method 1
  // const tabPanel = tabs.querySelector(`[aria-labelledby = '${id}']`);
  // console.log(tabPanel);
  // tabPanel.hidden = false;

  //method 2
  // console.log(tabPanels);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
