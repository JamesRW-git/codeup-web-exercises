"use strict";
//follow along during Loop lecture. Thanks Casey!

//let isAwesome = true;
//if(isAwesome) {
//    console.log('I am awesome');
//}

//this loop never runs
//let incrementor = 0;
//while (incrementor > 0) {
//    console.log(incrementor--);
//}
//console.log('The loop has ended');

//To do: use a while loop to output the numbers from 8-50 COMPLETE
//To do: using the same example, output the odd numbers from 8-50
//let incrementor = 8;
//while (incrementor < 50) {
//    incrementor++;
//    if(incrementor % 2 === 0){
//        console.log(incrementor);
//    } else {
//        continue;
//    }
//}

//full name example
//let fullNameEntered = false;
//let names = "";
////We don't know how many names they have
//do {
//    names += prompt('Please enter your name' + " ");
//    fullNameEntered = confirm('Is this your full name?');
//    if (!fullNameEntered){
//        names += " ";
//    }
//} while (!fullNameEntered)
//
//alert('This is your name: ' + names);

let numberOfNames = prompt("How many names do you use?");
let names = "";
do {
    names += prompt('Please enter name ' + ' ');
    names += ' ';
    numberOfNames--;
} while (numberOfNames > 0);

alert('This is your name: ' + names);