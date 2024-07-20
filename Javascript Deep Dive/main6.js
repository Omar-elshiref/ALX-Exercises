// Exercise 1: In this exercise, you will design a feedback form that requires users to provide their email address, age, and a feedback message. Additionally, you will enforce a word count limit of 100 words and a character limit of 5000 characters for the feedback message field. JavaScript will be used to validate the form inputs before submission.

// Instructions:

// Create an HTML form with input fields for email, age, and a message textarea.
// Implement JavaScript code to validate the email format.
// Validate the age to ensure it is a number between 18 and 99.
// Implement word count validation for the message field, limiting it to 100 words.
// Implement character count validation for the message field, limiting it to 5000 characters.
// Display appropriate error messages for invalid inputs.
// Ensure that the form submits only if all validations pass.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //email
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    return;
  } else {
    emailError.textContent = "";
  }

  //age
  const age = document.getElementById("age");
  const ageError = document.getElementById("ageError");
  if (age.value < 18 || age.value > 99) {
    ageError.textContent = "Age must be between 18 and 99.";
    return;
  } else {
    ageError.textContent = "";
  }

  //message
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  let myb = message.value;
  let array = [];
  array.push(myb.split(" "));
  if (message.value > 5000 || array.length > 100) {
    messageError.textContent = "Message must be at last 5000 characters and 100 words";
    return;
  } else {
    messageError.textContent = "";
  }

  form.submit();
});
