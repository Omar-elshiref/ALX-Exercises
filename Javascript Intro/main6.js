// Task 1: DOM Manipulation Task
// Objective:
// Select a paragraph element by its ID and change its text content to “Hello, DOM!”.

// Steps:
// Ensure your HTML has a paragraph (<p>) element with a unique ID. html <p id="greeting">Original Text</p>
// In your JavaScript, use document.getElementById() to select the paragraph element.
// Use the .textContent property to change the text of the paragraph to “Hello, DOM!”.

let myP = document.getElementById("greeting");

myP.textContent = "Hello, DOM!";