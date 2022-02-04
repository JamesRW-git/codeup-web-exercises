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


/*//Get User's Name and Return Console Log
function getName(){
    return prompt("Hello User, what is your human name?")
}

console.log(getName());

//Display User's Name and Return an Alert
function showName(username) {
    alert("Hello, " + username + ", prepare for the unexpected.");
}

//This invokes showName with getName passed in as a parameter
showName(getName());*/

/*Make a function named isLowerCase(letter) which returns true if the parameter is lowercased;
otherwise it returns false
Write a function named double(n) that returns a number times two
Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and
data type; otherwise it returns false.*/

//Function Checks for Lowercase Characters in the string
function isLowerCase(letter) {
    return letter == letter.toLowerCase() && letter != letter.toUpperCase();
}

console.log("Check: ", isLowerCase("Check"));
console.log("check: ", isLowerCase("check"));
console.log("ChEcK: ", isLowerCase("ChEcK"));
console.log("CAPITAL", isLowerCase("CAPITAL"));

//Function takes a number and multiplies it by two
function double(n) {
    return n * 2;
}

console.log("Check 2 * 2: ", double(2));
console.log("Check 29.512 * 2: ", double(29.512));
console.log("Check 210 * 2: ", double(210));

//Function Takes two inputs and checks to see if they're identical
function areIdentical(input1, input2) {
    return input1 === input2;
}

console.log("Check if ONE and one are identical: ", areIdentical("ONE", "one"));
console.log("Check if one and one are identical: ", areIdentical("one", "one"));
console.log("Check if one and 1 are identical: ", areIdentical("one", 1));
console.log("Check if four-twenty and 420 are identical: ", areIdentical("four-twenty", 420));




