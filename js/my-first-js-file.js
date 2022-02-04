"use strict";

// console.log("This is fine.");
//
// let myName = "James";
//
// console.log(myName);
//
// myName += " Woodward";
//
// console.log(myName);

// Allows the user's name to be logged as myName
// let myName = prompt("Hi, what's your name?");

// console.log(myName);

// myName += " " + prompt("What is your last name?");

// console.log(myName.toUpperCase());

let isAwesome = confirm("Are you awesome today?");

while(!isAwesome) {
    isAwesome = confirm("ARE YOU AWESOME TODAY?");
}

if (isAwesome) {
    alert("Stay awesome, man (or other type of person)");
    console.log("Always good to hear! Stay awesome or else");
}