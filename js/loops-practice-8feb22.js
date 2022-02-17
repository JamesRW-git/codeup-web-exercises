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
let fullNameEntered = false;
let names = "";
//We don't know how many names they have
do {
   names += prompt('Please enter your name' + " ");
   fullNameEntered = confirm('Is this your full name?');
   if (!fullNameEntered){
       names += " ";
   }
} while (!fullNameEntered)

alert('This is your name: ' + names);

//full name example using prompt for number of names
//let numberOfNames = prompt("How many names do you use?");
//let names = "";
//do {
//    names += prompt('Please enter name ' + ' ');
//    names += ' ';
//    numberOfNames--;
//} while (numberOfNames > 0);
//
//alert('This is your name: ' + names);

//do while mini exercise
// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

//mine
//let spacesAvail = 30;
//console.log('There are currently ' + spacesAvail + ' parking spots left');
//do {
//    spacesAvail--;
//    if (spacesAvail % 2 === 0 && spacesAvail >= 2) {
//        console.log('There are currently ' + spacesAvail + ' parking spots left');
//    }
//} while (spacesAvail);
//console.log('This parking lot is now full!');

//casey
//let numSpaces = 30;
//console.log("Welcome to the Overpriced Parking Structure!");
//do {
//    console.log('There are ' + numSpaces + ' remaining!');
//    numSpaces -=2;
//} while (numSpaces);
//console.log('The parking garage is full!')

// // TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
// //  correct password is given.

//password exercise
/*let password = 'PasswordsR4Losers';
let isCorrect = false;
let attempt = "";
while (!isCorrect) {
    attempt = prompt('Please enter your password');
    isCorrect = (attempt === password);
    if (!isCorrect) {
        alert('That was incorrect');
    }
}
alert('You have entered the correct password!');*/

/*
let letters = '';

for(let i = letters.length; i < 36; i++){ //stop the loop when character count is 36
    console.log(letters.length);
    letters += 'z';
    console.log(letters);
}

console.log(letters.length);*/


// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo) COMPLETE

function zeroToNum(num){
    for(let i = 0; i <= num; i += 2) {
            console.log(i)
    }
}

zeroToNum(30);

// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

function marcoPoloOrNum(maxnum) {
    for(let i = 1; i <= maxnum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' Marco Polo');
        } else if(i % 3 === 0){
                console.log(i + ' Marco');
            } else if (i % 5 === 0) {
                console.log(i + ' Polo');
            } else {
                console.log(i + ' I\'m not playing.');
            }
        }
    }


marcoPoloOrNum(40);