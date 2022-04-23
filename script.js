// Code Starts Here..
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity

const form = document.querySelector("#form");
const message = document.querySelector("#message");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  // alert(isValid); // false
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
  } else {
    if (password1.value === password2.value) {
      passwordMatch = true;
      password1.style.borderColor = "green";
      password2.style.borderColor = "green";
      message.style.color = "green";
    } else {
      passwordMatch = false;
      message.textContent = "Make Sure Password Match";
      message.style.color = "red";
      password1.style.borderColor = "red";
      password2.style.borderColor = "red";
      return;
    }

    if (isValid && passwordMatch) {
      message.textContent = "Register Successfully";
      message.style.color = "green";
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // alert("Yaa");
  validateForm();
});
