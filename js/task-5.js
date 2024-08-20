document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">
`);

const widget = document.querySelector(".widget");
const span = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
btn.addEventListener("click", (event)=> {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = document.body.style.backgroundColor;
  console.log({body: span.textContent})
});

function getRandomHexColor(event) {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
