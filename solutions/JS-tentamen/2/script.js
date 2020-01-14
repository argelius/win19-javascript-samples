/* Implement your solution here */

const COLORS = ["red", "green", "blue"];

const buttons = document.getElementsByTagName("button");
const divEl = document.querySelector(".container");

function onClick() {
  const color = this.className;

  for (let i = 0; i < COLORS.length; i += 1) {
    divEl.classList.remove(COLORS[i]);
  }

  divEl.classList.add(color);
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", onClick);
}
