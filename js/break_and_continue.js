"use strict";

//Break and Continue Exercise
//Doc Rob explained this very well. I was struggling to figure out how to incorporate break
//despite understanding the concept

var oddNumber = promptForOddNumberInRange(1,50);
oddNumber = parseInt(oddNumber);

printOddNumbersInRangeWithSkip(1, 50, oddNumber)

function printOddNumbersInRangeWithSkip(low, high, skipNumber) {
    console.log('Number to skip is: ' + skipNumber);
    for(let i = low; i <= high; i++) {
        if (i === skipNumber || i % 2 === 0) {
            if (i === skipNumber) {
                console.log('Yikes! Skipping number: ' + skipNumber);
            }
            continue;
        }
        //if you get here, then should be an odd number that is within range and not skipNumber
        console.log('Here is an odd number: ' + i)
    }
}

function promptForOddNumberInRange(low, high) {
    // loops until user gives an odd number within the range INCLUSIVE
    var result;
    while(true) {
        result = prompt('Enter and odd number between ' + low + ' and ' + high);
        //console.log(result);
        if (result % 2 === 1 && result >= low && result <= high) {
            break;
        }
    }
    //console.log(result);
    return result;
}





//function breakAndContinue () {
//    let userChoice = parseInt(prompt('Please enter an odd number between 1 and 50'));
//
//    while(userChoice < 1 || userChoice > 50 || userChoice % 2 === 0){
//        userChoice = parseInt(prompt('Please enter an odd number between 1 and 50'));
//    }
//
//        console.log('Number to skip: ' + userChoice);
//
//        for(let i = 1; i <= 50; i++){
//            if(userChoice === i) {
//                console.log('Yikes! Skipping number: ' + userChoice);
//            } else if (i % 2 !== 0) {
//                console.log('Here is an odd number: ' + i);
//            }
//        }
//    }
//
//
//breakAndContinue();








