function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

btn.addEventListener('click', (event) => {
  const someColor = getRandomHexColor();
  body.style.backgroundColor = someColor;
  color.textContent = someColor;
});
