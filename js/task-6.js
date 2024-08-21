document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">`)

const controls = document.querySelector('#controls');
  const mainInput = document.querySelector('input[type="number"]');
  const createBtn = controls.querySelector('button[data-create]');
  const destroyBtn = controls.querySelector('button[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

controls.classList.add("container");
mainInput.classList.add("main-input");
createBtn.classList.add("btn");
destroyBtn.classList.add("btn", "destroy-btn");
boxesContainer.classList.add("boxes-container");

createBtn.addEventListener("click", (event) => {
  boxesContainer.innerHTML = '';
  const numberOfBoxes = parseInt(mainInput.value);
  const baseWidth = 30;
  const baseHeight = 30;
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    for (let i = 0; i < numberOfBoxes; i++) {
   const boxEl = document.createElement("div");
      boxEl.setAttribute('data-box', 'box');
      const currentWidth = baseWidth + (i * 10);
      const currentHeight = baseHeight + (i * 10);
      boxEl.style.width = `${currentWidth}px`;
      boxEl.style.height = `${currentHeight}px`;
      boxEl.style.backgroundColor = getRandomHexColor();
      boxesContainer.append(boxEl);
      mainInput.value = '';
    }
 }
})

function destroyBoxes () {
boxesContainer.innerHTML = '';
  mainInput.value = '';
};

destroyBtn.addEventListener("click", destroyBoxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
