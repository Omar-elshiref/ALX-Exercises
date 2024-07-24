// Practice Exercises
// In this exercise, you need to implement the script.js file for the html code below to function as follows.
//  It should add a new list item to the unordered list with the id list-container.

// Step-by-step Instructions:
// - Add an event listener to the “Add” button to trigger the addItem() function when clicked.
// - In the addItem() function: - Get the input value using the id input-text
// - If the input value is not empty: - Create a new list item.
// - Set the text of the list item to the input value.
// - Append the new list item to the list container.
// - Clear the input field.

const button = document.getElementById("add-button");
const list = document.getElementById("list-container");
const input = document.getElementById("input-text");

button.addEventListener("click", function addItem(e) {
  e.preventDefault();

  if (input.value !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);

    input.value = "";
  }
});
