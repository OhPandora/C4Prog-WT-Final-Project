
/* jshint esversion: 6 */

// Get the contact form
const contactForm = document.getElementById("contact-form");

// Get the form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Get the error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Get the submit button
const submitButton = document.getElementById("submit-button");

// Regular expressions
const nameRegex = /^[A-Za-z\s]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[A-Za-z0-9\s.,!?'"()-]{10,}$/;

// Validate the name field
function validateName() {

    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
        nameError.textContent = "Name is required.";
        return false;
    }

    if (!nameRegex.test(nameValue)) {
        nameError.textContent = "Please enter a valid name.";
        return false;
    }

    nameError.textContent = "";
    return true;
}

// Validate the email field
function validateEmail() {

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        emailError.textContent = "Email is required.";
        return false;
    }

    if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// Validate the message field
function validateMessage() {

    const messageValue = messageInput.value.trim();

    if (messageValue === "") {
        messageError.textContent = "Message is required.";
        return false;
    }

    if (!messageRegex.test(messageValue)) {
        messageError.textContent = "Message must contain at least 10 valid characters.";
        return false;
    }

    messageError.textContent = "";
    return true;
}

// Validate fields and update the submit button
nameInput.addEventListener("input", () => {
    validateName();
    updateSubmitButton();
});

emailInput.addEventListener("input", () => {
    validateEmail();
    updateSubmitButton();
});

messageInput.addEventListener("input", () => {
    validateMessage();
    updateSubmitButton();
});

// Handle form submission
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        alert("Your message has been submitted successfully!");
        contactForm.reset();
        submitButton.disabled = true;
    }

});

// Update the submit button
function updateSubmitButton() {

    const isNameValid = nameRegex.test(nameInput.value.trim());
    const isEmailValid = emailRegex.test(emailInput.value.trim());
    const isMessageValid = messageRegex.test(messageInput.value.trim());

    submitButton.disabled = !(isNameValid && isEmailValid && isMessageValid);
}
