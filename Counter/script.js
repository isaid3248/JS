const screenEL = document.querySelector(".screen");
const positiveButton = document.querySelector(".positive");
const negativeButton = document.querySelector(".negative");

console.log(screenEL, positiveButton, negativeButton);

let button = 0;

positiveButton.addEventListener("click", () => {
  button = button + 1;
  console.log("Positive is clicked", button);
  screenEL.innerHTML = button;
});

negativeButton.addEventListener("click", () => {
  button = button - 1;
  console.log("Negative is clicked", button);
  screenEL.innerHTML = button;
});
