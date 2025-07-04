const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});
