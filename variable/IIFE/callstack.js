//The call stack is a crucial concept in JavaScript's runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program
//call stack follows the concept of LIFO
//LIFO stands for Last In First Out

//there are thrree main components of the call stack
//1. the function call
//2. the call stack
//3. the event loop

//javascript is a single threaded language, which means it can only execute one thing at a time

//it can be made multi threaded by using web workers

//single threaded it can only use one core of the CPU at a time and executes only one task at a time no matter how many tasks ur trying to execute at once

//JAVASCRIPT EXECUTION CONTEXT
//1. Global Execution Context
//2. Functional Execution Context
//3. Eval Function Execution Context

//GLOBAL CONTEXT is the default context, it is the context in which the code is executed when it is not inside any function

//FUNCTIONAL CONTEXT is the context in which the code is executed when it is inside a function
//IN FUNCTIONAL CONTEXT ALL THE VARIABLES ARE ASSGINED THE UNDEFINED VALUE EVEN IF U HAVE DEFINED THEM

//IN THE EVAL FUNCTION CONTEXT, THE CODE IS EXECUTED INSIDE THE EVAL FUNCTION and the value is assigned to the variable.