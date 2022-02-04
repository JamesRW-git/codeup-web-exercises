"use strict";

/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */


//Get User's Name and Return Console Log
function getName(){
    return prompt("Hello User, what is your human name?")
}

console.log(getName());

//Display User's Name and Return an Alert
function showName(username) {
    alert("Hello, " + username + ", prepare for the unexpected.");
}

//This invokes showName with getName passed in as a parameter
showName(getName());






