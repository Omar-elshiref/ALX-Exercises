// *Exercise 3: * Write a function that accepts an array of numbers and returns a new array containing only the even numbers using a loop.

// Steps:

// Define a function named filterEvenNumbers that takes an array of numbers as a parameter.
// Initialize an empty array named evenNumbers to store the even numbers.
// Use a loop (for loop or forEach) to iterate through each number in the input array.
// Inside the loop, check if the current number is even (i.e., divisible by 2 without a remainder). Hint use % operator to check if it is divisble
// If the number is even, push it into the evenNumbers array.
// After the loop, return the evenNumbers array containing only the even numbers.

function filterEvenNumbers(...numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(filterEvenNumbers(2, 3, 4, 8, 7, 13, 15, 20));
