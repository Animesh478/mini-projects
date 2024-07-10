const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector("input");
const operators = document.querySelectorAll(".operator");
const acButton = document.querySelector(".btn-AC");
const deleteBtn = document.querySelector(".btn-clear");

display.value = "";
let value = 0;
// let value = "";
// for (const button of buttons) {
//   button.addEventListener("click", (e) => {
//     value = value.toString() + button.textContent;
//     console.log(typeof value);
//     // display.textContent = +value;
//   });
// }

for (let number of numbers) {
  number.addEventListener("click", () => {
    display.value = display.value + number.innerText;
  });
}

const add = document.querySelector(".btn-add");
add.addEventListener("click", () => {
  value = Number(display.value);
  console.log(value);
  display.value = display.value + add.innerText;
});

// for (let operator of operators) {
//   console.log(operator.innerText);
// }

deleteBtn.addEventListener("click", () => {
  const displayValue = display.value.split("").slice(0, -1).join("");
  display.value = displayValue;
});

acButton.addEventListener("click", () => {
  display.value = "";
});
