document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet">
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&display=swap" rel="stylesheet">>
`);

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const title = document.querySelector("h1");
const wrapper = document.createElement("div");
wrapper.className = "input-wrapper";
input.insertAdjacentElement('beforebegin', wrapper);
wrapper.append(input, title);

input.addEventListener("input",(event) => {
    const trimmedValue = input.value.trim();
    span.textContent = trimmedValue || "Anonymous";
    console.log({ name: `${span.textContent}` });
});