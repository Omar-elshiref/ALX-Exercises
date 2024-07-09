// Exercise 2: Calculate Year of Birth
// Write a JavaScript program that prompts the user for their name and age, then calculates and alerts the year they were born.
// This exercise demonstrates how to interact with users and process simple data.

// Steps:
// Prompt for Name and Age:

// Use the prompt() function to ask the user for their name. Store the input in a variable named userName.
// Use prompt() again to ask for the user's age. Store this in a variable named userAge.
// Calculate Year of Birth:

// Determine the current year using new Date().getFullYear().
// Subtract userAge from the current year to calculate the year of birth. Store this in a variable named yearOfBirth.
// Display the Result:

// Use alert() to show a message to the user that includes their name and the calculated year of birth.




let userName = prompt("What your name?", "Name")

let userAge = prompt("What your age?", "Age")

let yearOfBirth = new Date().getFullYear()

alert(`Your name is ${userName} and year of birth is ${yearOfBirth - userAge}`)

console.log(userName)

console.log(userAge)

console.log(yearOfBirth)

