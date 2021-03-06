"use strict";

/* ########################################################################## */
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 * COMPLETE
 */
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 * COMPLETE
 */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


//function analyzeColor(color) {
//    color = color.toLowerCase();
//    if (color === 'blue') {
//        console.log(color + ' is a color I was prepared for.');
//    } else if (color === 'green') {
//        console.log(color + ' is a color I was prepared for.');
//    } else if (color === 'yellow') {
//        console.log(color + ' is a color I was prepared for.');
//    } else if (color === 'purple') {
//        console.log(color + ' is a color I was prepared for.');
//    } else if (color === 'black') {
//        console.log(color + ' is a color I was prepared for.');
//    } else if (color === 'white') {
//        console.log(color + ' is a color I was prepared for.');
//    } else if (color === 'red') {
//        console.log(color + ' is a color I was prepared for.');
//    } else {
//        console.log('I was not prepared for the input of ' + color);
//    }
//}
//
//analyzeColor('blue');
//analyzeColor('violet');
//analyzeColor('GREEN');
//analyzeColor(randomColor);




/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 * COMPLETE
 */
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 * COMPLETE
 */

//function analyzeColor(color) {
//    color = color.toLowerCase();
//    switch (color) {
//        case 'blue':
//            return 'A clear sky is often blue';
//            break;
//        case 'green':
//            return 'Healthy grass is green';
//            break;
//        case 'yellow':
//            return 'Homer Simpson is yellow';
//            break;
//        case 'purple':
//            return 'Purple is a royal color';
//            break;
//        case 'black':
//            return 'Black is an absence of color';
//            break;
//        case 'white':
//            return 'White is a mixture of all colors';
//            break;
//        case 'red':
//            return 'Red is not a color you want to see leaving your body';
//            break;
//        default:
//            return 'I was not prepared for the input of ' + color;
//            break;
//    }
//}
//
//var userColor = prompt('Please enter a color');
//alert(analyzeColor(userColor));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 * COMPLETE
 */
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);

//Works but is impractical since I don't have it looping to keep asking for the lucky number if it falls outside bounds
//Will look back at this later and cringe, probably, but it works
function calculateTotal(luckyNumber, totalAmount) {
    luckyNumber = parseInt(prompt('What was your lucky number, lucky guy/lady'));
    if (luckyNumber >=1 && luckyNumber <= 5) {
        totalAmount = parseFloat(prompt('What was your total bill?'));
        switch (luckyNumber) {
            case luckyNumber = 0:
                return alert('Your Lucky Number was ' + luckyNumber + '. Your total was: $' + totalAmount + ' After discount: $' + totalamount);
                break;
            case luckyNumber = 1:
                return alert('Your Lucky Number was ' + luckyNumber + '. Your total was: $' + totalAmount + ' After discount: $' + totalAmount * .9);
                break;
            case luckyNumber = 2:
                return alert('Your Lucky Number was ' + luckyNumber + '. Your total was: $' + totalAmount + ' After discount: $' + totalAmount * .75);
                break;
            case luckyNumber = 3:
                return alert('Your Lucky Number was ' + luckyNumber + '. Your total was: $' + totalAmount + ' After discount: $' + totalAmount * .65);
                break;
            case luckyNumber = 4:
                return alert('Your Lucky Number was ' + luckyNumber + '. Your total was: $' + totalAmount + ' After discount: $' + totalAmount * .5);
                break;
            case luckyNumber = 5:
                return alert('Your Lucky Number was ' + luckyNumber + '. Your total was: $' + totalAmount + ' After discount: $' + 0);
                break;
            default:
                alert('Please go back and input a Lucky Number between 1 and 5');
                break;
        }
    } else{
        alert('Please go back and input a Lucky Number Between 1 and 5');
    }
}

calculateTotal();




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



//userConfirm outputs true/false
function userConfirm(){
    let userChoice = confirm('Would you like to enter a number?');
    if (userChoice) {
        userParticipates(prompt(('Please enter a number')));
    } else {
        alert('No worries. Have a great day!');
    }
}

function userParticipates(num) {
    //alerts user that input is not a number and prompts user again to enter a number
    if (isNaN(num)) {
        alert('Please enter a number type, not a ' + typeof num);
        num = prompt('Please enter a number');
    }
    //parses input into a floating point number and alerts
    num = parseFloat(num);
    //determines if input is odd or even
    if (num % 2 === 0) {
        alert('The number ' + num + ' is even');
    } else {
        alert('The number ' + num + ' is odd');
    }
    //determines if input is positive or negative and alerts
    if (num < 0) {
        alert(num + ' is negative');
    } else {
        alert(num + ' is positive');
    }
    //adds 100 to user input and alerts
    alert(num + ' plus 100 is ' + (num + 100));
}

userConfirm();

