"use strict";

//Maths


function randomNumber(maxRandom , minRandom) {
    return Math.floor(Math.random() * (maxRandom - minRandom) + minRandom);
}

let randomNum1 = randomNumber(1,100);
let randomNum2 = randomNumber(1,100);


function add(num1, num2) {
    return num1 + num2;
}

function square(numToSqr){
    return numToSqr * numToSqr;
}

function sumOfSquares(a, b){
    a = square(a);
    b = square(b);
    return add(a,b);
}

console.log('Our numbers are: ' + randomNum1 + ' and ' + randomNum2);
console.log(sumOfSquares(randomNum1,randomNum2));


//FIZZ-BUZZZZZZZ
getFizzBuzz(3);
getFizzBuzz(5);
getFizzBuzz(15);
getFizzBuzz();
getFizzBuzz('Hello. I\'m FizzBuzz');

function getFizzBuzz(startingNum) {
    if(startingNum % 3 ===0){
        console.log('fizz');
    } else if (startingNum % 5 === 0){
        console.log('buzz');
    }
    if(startingNum % 3 === 0 && startingNum % 5 === 0){
        console.log('FIZZ BUZZ');
    }
    if(startingNum === null || startingNum === undefined || isNaN(startingNum) === true){
        console.log('NOT APPLICABLE')
    }
}


