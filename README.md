# Asynchronous JavaScript and APIs - Gif Generator

## Promises
- a promise is an object that might produce a value at some point in the future.

## async and await

### async
- The ``async`` keyword is what lets the javascript engine know that you are declaring an asynchronous function, 
- This is required to use await inside any function. 
- When a function is declared with async, it automatically returns a promise, returning in an async function is the same as resolving a promise, likewise, throwing an error will reject the promise.
- An important thing to understand is async functions are just syntactical sugar for promises.

### await
- ``await`` tells javascript to wait for an asynchronous action to finish before continuing the function. 
- It’s like a ‘pause until done’ keyword. 
- The await keyword is used to get a value from a function where you would normally use .then(). 
- Instead of calling .then() after the asynchronous function, you would simply assign a variable to the result using await, then you can use the result in your code as you would in your synchronous code.