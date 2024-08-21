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

const validateName = (name) => /^[A-Z][a-z]*$/.test(name);

const updateStyles = () => {
    const trimmedValue = input.value.trim();
    const isValid = validateName(trimmedValue);
    span.textContent = trimmedValue || "Anonymous";
    input.style.borderColor = isValid ? "green" : "red";

     if (!isValid && trimmedValue !== "") {
        clearTimeout(window.alertTimeout);
        window.alertTimeout = setTimeout(() => {
            alert('Name must start with a capital letter and contain only letters.');
        }, 1000); 
     }
     
     else {
        clearTimeout(window.alertTimeout);
    }
    console.log({ name: `${span.textContent}` });
};

input.addEventListener("input", updateStyles);




