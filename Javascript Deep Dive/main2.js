// Exercise 2: Given an arrya nums = [1, 2, 3, 4, 5] add the number 6 to the array and remove the first number from the list.
// Then make sure to log the array to see it have the expected value of nums = [2, 3, 4, 5, 6]

// Steps:

// Define an array named nums with initial elements [1, 2, 3, 4, 5].
// Add the number 6 to the end of the nums array using the push() method.
// Remove the first number from the nums array using the shift() method.
// Log the updated nums array to the console to verify that it has the expected value [2, 3, 4, 5, 6].

let nums = [1, 2, 3, 4, 5];

nums.push(6);

nums.shift();

console.log(nums);
