"use strict";

//While Loop Exercise

let numInput = 2;
while (numInput <= 65536) {
    if(numInput % 2 === 0) {
        console.log(numInput);
        numInput *= 2;
    }
}

//Do While Loop Exercise

//use inside code: Math.floor(Math.random() * 5) + 1
var allCones = Math.floor(Math.random() * 50) + 50;

do {
        var randomNumber = Math.floor(Math.random() * 5) + 1;
        if(randomNumber > allCones) {
                console.log('I cannot sell you ' + randomNumber + ' cones. I only have ' + allCones + ' left.');
        } else {
                allCones -= randomNumber;
                console.log(randomNumber + ' cones sold...I have ' + allCones + ' left.');
        }
} while (allCones >= randomNumber);

console.log('Yay! I sold them ALL!');