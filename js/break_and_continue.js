"use strict";

//Break and Continue Exercise
function breakAndContinue () {
    let userChoice = parseInt(prompt('Please enter an odd number between 1 and 50'));

    while(userChoice < 1 || userChoice > 50 || userChoice % 2 === 0){
        userChoice = parseInt(prompt('Please enter an odd number between 1 and 50'));
    }

        console.log('Number to skip: ' + userChoice);

        for(let i = 1; i <= 50; i++){
            if(userChoice === i) {
                console.log('Yikes! Skipping number: ' + userChoice);
            } else if (i % 2 !== 0) {
                console.log('Here is an odd number: ' + i);
            }
        }
    }


breakAndContinue();








