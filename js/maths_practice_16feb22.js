"use strict";

//Brief lecture on MATHS

let randomNum = Math.random();

console.log('Before multiplying: ' + randomNum);
console.log('After multiplying by 10: ' + (randomNum * 10));
console.log('After multiplying by 100: ' + (randomNum * 100));

//So this will give us a bottom range of 20
//Math.floor of (random number * (max - min)) + min
//Shown below with exclusive 1
let rangedNum = Math.floor((randomNum * (100 - 20) + 1) + 20);
console.log(rangedNum);