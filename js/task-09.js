function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bgndColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
btnChangeColor.addEventListener(`click`, colorFoo);

function colorFoo() {
  const changeColor = getRandomHexColor();
  spanColor.textContent = changeColor;
  console.log(bgndColor.style.backgroundColor = changeColor);
};