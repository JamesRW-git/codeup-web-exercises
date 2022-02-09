"use strict";

//While Loop Exercise

//let numInput = 2;
//while (numInput <= 65536) {
//    if(numInput % 2 === 0) {
//        console.log(numInput);
//        numInput *= 2;
//    }
//}

//Do While Loop Exercise

//use inside code: Math.floor(Math.random() * 5) + 1
var allCones = Math.floor(Math.random() * 50) + 50;
var randomNumber = Math.floor(Math.random() * 5) + 1;

do {
        console.log(randomNumber + ' cones sold...I have ' + allCones + ' left.');
        allCones -= randomNumber;
} while (allCones - randomNumber >= 0);

console.log('I cannot sell you ' + randomNumber + ' cones. I only have ' + allCones + ' left.');
console.log('Yay! I sold them ALL!');