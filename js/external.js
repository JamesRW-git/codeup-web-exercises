"use strict"

console.log("Hello from external Javascript!");

//First Exercise
/*
alert("Welcome to my website!");

var userFavColor = prompt("What's your favorite color?");

alert("Really? " + userFavColor + " is my favorite color, too!");*/

//Second Exercise

/*let dailyPrice = 3.00;
let lilMermaid = parseInt(prompt("How many days do you want to keep The Little Mermaid?")) * dailyPrice;
let broBear = parseInt(prompt("How many days do you want to keep Brother Bear?")) * dailyPrice;
let hercules = parseInt(prompt("How many days do you want to keep Hercules?")) * dailyPrice;

let totalCost = lilMermaid + broBear + hercules;

alert("Thank you! Your total will be $" + totalCost);*/

//Third Exercise

let googleTime = parseInt(prompt("How many hours will you work for Google this week?")) * 400;
let amazonTime = parseInt(prompt("How many hours will you work for Amazon this week?")) * 380;
let metaTime = parseInt(prompt("How many hours are you going to worship The Zuc this week?")) * 350;
let totalEarn = googleTime + amazonTime + metaTime;
alert("You will earn $" + totalEarn + " this week.");

//Fourth Exercise

/*let maxClassSize = parseInt(prompt("What's the max class size?"));
console.log(maxClassSize);
let currentClassSize = parseInt(prompt("How many people are in the class currently?")) + 1;
console.log(currentClassSize);
let conflictOrNo = confirm("Click OK if this class does not conflict with any other scheduled class.");
console.log(conflictOrNo);

if (conflictOrNo && (currentClassSize <= maxClassSize)) {
    alert("Congratulations, we'll see you in class!");
    console.log("Success");
} else {
    alert("Sorry, this class will not work for you.");
    console.log("Fail");
}*/

//Fifth Exercise

let productMin = 2;
let productsInCart = parseInt(prompt("How many items are you getting?"));
let expirationDate = prompt("What is the expiration date of the offer you'd like to use? (MM/DD/YYYY)");
let inputDate = new Date(expirationDate);
let todaysDate = new Date();

//Check Date
if(inputDate.setHours(0,0,0,0) <= todaysDate.setHours(0,0,0,0)) {
    var expired = true;
} else {
    expired = false;
}

//Check Membership
let premiumMember = confirm("Click OK if you are a Premium Member");

//Final Check and User Alert
if (premiumMember || !expired && productMin < productsInCart) {
    console.log("Accepted");
    alert("Everything looks good! Here's some free money.");
} else {
    console.log("Invalid");
    alert("Something is wrong, no discount for you.");
}





