document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">`)

const controls = document.querySelector('#controls');
const mainInput = document.querySelector('input[type="number"]');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const p = document.querySelector("p");
const wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("main-div");
p.insertAdjacentElement("afterend", wrapperDiv);
wrapperDiv.append(controls, boxesContainer);

controls.classList.add("container");
mainInput.classList.add("main-input");
createBtn.classList.add("btn");
destroyBtn.classList.add("btn", "destroy-btn");
boxesContainer.classList.add("boxes-container");


function createBoxes() {
  boxesContainer.innerHTML = '';
  const numberOfBoxes = parseInt(mainInput.value);

  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
     const fragment = document.createDocumentFragment();
    for (let i = 0; i < numberOfBoxes; i++) {
       const boxEl = document.createElement("div");
       const size = 30 + (i * 10);
       boxEl.style.width = `${size}px`;
       boxEl.style.height = `${size}px`;
       boxEl.style.backgroundColor = getRandomHexColor();
       fragment.append(boxEl);
        mainInput.value = '';
    }
    boxesContainer.append(fragment);

  }

  else {
      alert('Please enter a number between 1 and 100');
    }
}

createBtn.addEventListener("click", createBoxes);

function destroyBoxes () {
boxesContainer.innerHTML = '';
mainInput.value = '';
};

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
};