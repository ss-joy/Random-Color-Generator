function randomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}
function randColor() {
  let r, g, b;
  r = randomNumber();
  g = randomNumber();
  b = randomNumber();
  return `rgb(${r},${g},${b})`;
}
let body = document.querySelector("body");
let button = document.querySelector("button");
let header = document.querySelector("header");
let div = document.querySelector("div");
button.addEventListener("click", () => {
  let col = randColor();
  body.style.backgroundColor = col;
  header.style.backgroundColor = col;
  div.innerText = col;
});
