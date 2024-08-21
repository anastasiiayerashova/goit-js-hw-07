document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet">`);

const registerForm = document.querySelector(".login-form");
const email = document.querySelector('[name="email"]');
const pwd = document.querySelector('[name="password"]');
const btn = document.querySelector("button");
const label = document.querySelectorAll("label");
label.forEach(label => {
  label.classList.add("labels");
});

registerForm.insertAdjacentHTML("beforebegin", `<div class = "form-container"></div>`);
const container = document.querySelector(".form-container");
container.append(registerForm);

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.elements.email.value.trim();
    const userPwd = form.elements.password.value.trim();
   
   if(userEmail === "" || userPwd === "") {
       email.style.borderColor = "red";
       pwd.style.borderColor = "red";
       alert('All form fields must be filled in');
   }
    
   else {
       alert("You have successfully registered!");
       email.style.borderColor = "";
       pwd.style.borderColor = "";
    console.log({ email: userEmail, password: userPwd });
       form.reset(); 
}
});

email.addEventListener("focus", (event) => {
    email.style.borderColor = "green";
});

pwd.addEventListener("focus", (event) => {
    pwd.style.borderColor = "green";
});