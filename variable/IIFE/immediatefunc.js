//IIFE ARE IMMEDIATELY INVOKED FUNCTION EXPRESSIONS THAT ARE USED , AS SOMETIMES THERE CAN BE POLLUTION FROM THE GLOBAL SCOPE HENCE TO REMOVE THAT POLLUTION OF THE VARIABLES FROM GLOBAL SCOPE WE USE IFFE
//allows you to create closures, which help maintain data privacy. 
//. You can hide variables and functions inside an IIFE, exposing only what's necessary. This concept is fundamental to the Module Pattern, a widely-used design pattern in JavaScript.

(function hello(){
    console.log("hello");
})();

//can work for arrow functions too
((name)=>{//PASSES THE NAME AS THE PARAMETER AND IN THE END YOU ARE PASSING THE ARGUMENT 
    console.log(`THIS IS SOMETHING NEW I LEARNED TODAY ON 05/08/24 ${name}`);
})('RITVIK BHATNAGAR');