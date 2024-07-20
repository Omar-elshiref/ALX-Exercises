// Exercise 2: In this exercise you’ll enhance the getBoredActivity function to use async/await syntax and include a callback parameter. Once the fetching of the activity is completed, the callback function will be invoked, logging the received activity.

// Instructions:

// Modify the getBoredActivity function to use async/await syntax.
// Use the await keyword to wait for the fetch operation to complete and parse the response as JSON.
// Invoke the callback function with the received activity as its argument.
// Define a callback function named logActivity that logs the received activity to the console.
// Call the getBoredActivity function, passing the logActivity function as the callback.




async function getBoredActivity(callback) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
}

function logActivity(activity) {
  console.log("Received activity:", activity);
}

getBoredActivity(logActivity);
