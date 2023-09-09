"use strict";
function genRandomNumber() {
    return Math.floor(Math.random() * 255) + 1;
}
function getRandomColor() {
    let r, g, b;
    r = genRandomNumber();
    g = genRandomNumber();
    b = genRandomNumber();
    return `rgb(${r},${g},${b})`;
}
let divs = document.querySelectorAll("div");
// initial colors
for (let div of divs) {
    div.style.backgroundColor = getRandomColor();
}
//random color
let id = null;
//initial speed value
let speedValue = 1000;
function changeSpeed() {
    if (id) {
        clearInterval(id);
    }
    id = setInterval(() => {
        for (let div of divs) {
            div.style.backgroundColor = getRandomColor();
        }
    }, speedValue);
}
//initial color generation
changeSpeed();
let plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    speedValue -= 200;
    changeSpeed();
});
let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
    speedValue += 200;
    changeSpeed();
});
