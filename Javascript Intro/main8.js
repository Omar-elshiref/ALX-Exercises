// Task 3: Hover Effect Task
// Objective:
// Create a hover effect on list items that changes their background color when hovered over.

// Steps:
// Ensure your HTML has a list of items (<ul> or <ol>) with <li> elements. html <ul> <li class="hover-item">Item 1</li> <li class="hover-item">Item 2</li> <li class="hover-item">Item 3</li> </ul>
// In your JavaScript, select all list items using document.querySelectorAll().
// Loop through each item and use .addEventListener() to attach mouseover and mouseout events.
// Inside the mouseover event’s callback function, change the item’s background color.
// Inside the mouseout event’s callback function, reset the item’s background color.

const lis = document.querySelectorAll("li");

lis.forEach((li) => {
    li.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    })
    li.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "white";
    })
})