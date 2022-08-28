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

let divs = document.querySelectorAll("div");

// initial colors
for (let div of divs) {
  div.style.backgroundColor = randColor();
}

//random color
let id;
function controlSpeed(speed) {
  id = setInterval(() => {
    for (let div of divs) {
      div.style.backgroundColor = randColor();
    }
  }, speed);
}

let speedValue = 1000;
controlSpeed(speedValue);

function newInterval() {
  clearInterval(id);
  controlSpeed(speedValue);
}

let plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  speedValue -= 200;
  newInterval(speedValue);
});

let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  speedValue += 200;
  newInterval(speedValue);
});
