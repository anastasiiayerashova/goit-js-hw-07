const controls = document.querySelector('#controls');
  const input = controls.querySelector('#amount-input');
  const createBtn = controls.querySelector('button[data-create]');
  const destroyBtn = controls.querySelector('button[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
