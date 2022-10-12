function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

changeColorBtn.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorRef.textContent = randomColor;
});
