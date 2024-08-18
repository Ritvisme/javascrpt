// •	Handling Asynchronous Tasks: Callback functions are often used in scenarios where you need to wait for an operation to complete, like reading data from a server or performing an animation.
// •	Example: Suppose you want to load data from an API and then display it on the webpage. You might use a callback function that gets called after the data is successfully retrieved.


// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more powerful and readable way to handle asynchronous code compared to callbacks.


// function callback(){
//     console.log("5 seconds have passed");
// }
// setTimeoutPromisified(5000).then(callback);

// function random(){}

// let p=new Promise(random);//a promise is supposed to give you something eventually
// console.log(p); 
// function callback(){
//     console.log("hello gaiz");
// }
// p.then(callback);

