document.head.insertAdjacentHTML("beforeend", `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&display=swap" rel="stylesheet">
`);

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

document.querySelector("h1").insertAdjacentHTML("afterend", 
    `<p class="error-message">Ім'я має починатися з великої літери та не містити цифри</p>`
);

const errorMessage = document.querySelector(".error-message");

const validateName = (name) => /^[A-Z][a-z]*$/.test(name);

const updateStyles = () => {
    const trimmedValue = input.value.trim();
    const isValid = validateName(trimmedValue);
    span.textContent = trimmedValue || "Anonymous";

    const errorVisible = !isValid && trimmedValue;
    input.style.borderColor = isValid ? "green" : "red";
    input.style.boxShadow = isValid ? "none" : "0 0 8px rgba(128, 128, 128, 0.6)";
    errorMessage.style.opacity = errorVisible ? "1" : "0";
    errorMessage.style.visibility = errorVisible ? "visible" : "hidden";
};

input.addEventListener("input", updateStyles);




