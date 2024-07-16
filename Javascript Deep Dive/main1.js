// Exercise 1: Destructuring Object Properties and Logging

// Given an object representing a person with properties like name, age, and profession, use destructuring to extract these values into separate variables and log them with the respective key value pair.

// Steps:

// Define an object named person with properties such as name, age, and profession.
// Use destructuring assignment to extract the name, age, and profession properties
// Log each extracted variable to the console using console.log() to display the values using Template Literals for printing.

const person = {
  name1: "Omar",
  age: 28,
  profession: "frontend",
};

const { name1, age, profession } = person;

console.log(name1);
console.log(age);
console.log(profession);
