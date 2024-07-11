// Task 2: Event Handling Task
// Objective:
// Add an event listener to a button that changes the button’s text to “Clicked!” when it is clicked.

// Steps:
// Ensure your HTML has a button element, optionally with an ID for easy selection. html <button id="clickButton">Click Me</button>
// In your JavaScript, select the button element using document.getElementById() or document.querySelector().
// Use .addEventListener() to attach a click event listener to the button.
// Inside the event listener’s callback function, change the button’s text to “Clicked!”.

let myButton = document.querySelector("#clickButton");

myButton.addEventListener("click", (e) => {
       e.target.textContent = "Clicked!";
       console.log(e)
})


console.log(myButton)
