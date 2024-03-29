function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]');


function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    console.error('The amount must be between 1 and 100.');
    return;
  }
  const newBox = [];
  let size = 30;
  divBoxes.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBox.push(box);
    size += 10;
  }
  divBoxes.append(...newBox);
}

createBtn.addEventListener('click', (event) => {
  const amount = parseInt(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = '';
  }
})

destroyBtn.addEventListener('click', () => {
  divBoxes.innerHTML = '';
})