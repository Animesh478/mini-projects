const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const value = button.textContent;
    console.log(value);
  });
}

