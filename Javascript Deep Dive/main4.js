// Exercise 1: Fetching and Logging a Random Activity from the Bored API

// In this exercise, you’ll use the JavaScript Fetch API and promises to fetch a random activity suggestion from the Bored API and log it to the console.

// Step-by-Step Guide:
// Understanding the Bored API:

// The Bored API provides random activity suggestions when you’re feeling bored.
// It offers a simple REST API interface accessible at https://bored-api.appbrewery.com/
// Making the Fetch Request:

// We’ll create a function named getBoredActivity to encapsulate the logic for fetching and handling the activity suggestion.
// Inside the getBoredActivity function:
// Use the fetch() function to make a network request to the Bored API endpoint.
// Chain a .then() to handle the successful response.
// Check if the response is okay using response.ok.
// Convert the response to JSON using response.json() to extract the activity data.
// Log the random activity suggestion to the console.




function getBoredActivity() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

getBoredActivity();

