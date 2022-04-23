// Code Starts Here..
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity

const form = document.querySelector("#form");
const message = document.querySelector("#message");

let isValid = false;
function validateForm() {
  isValid = form.checkValidity();
  // alert(isValid); // false
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // alert("Yaa");
  validateForm();
});
