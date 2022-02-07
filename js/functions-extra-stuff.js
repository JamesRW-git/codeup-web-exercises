"use strict";

//Function Drill One: isOdd
function isOdd(number) {
    console.log('The number is ' + number);
    if(!(number % 2 == 0)) {
        console.log(number + ' is odd!');
    } else {
        console.log(number + ' is not odd!');
    }
}

isOdd(5);
isOdd(-5);
isOdd(420);
isOdd(-420);
isOdd(8675309);

//Function Drill Two: isEven
function isEven(number) {
    console.log('The number is ' + number);
    if(number % 2 == 0) {
        console.log(number + ' is even!');
    } else {
        console.log(number + ' is not even!');
    }
}

isEven(5);
isEven(-5);
isEven(420);
isEven(-420);
isEven(8675309);

//Function Drill Three: identity
function identity(input) {
    return input;
}

console.log(identity('BAH HUMBUG'));
console.log(identity(5));
console.log(identity('Shimmy Shimmy Ya, Shimmy Yam, Shimmy Yay'));

//Function Drill Four: isFive
function isFive(input) {
    if(input == 5) {
        console.log(input + ': Yep. That\'s five.')
    } else {
        console.log(input + ': ...do I really need to tell you that isn\'t five? Seriously, dude.');
    }
}

isFive(5);
isFive(6);
isFive(974);

//Function Drill Five: addFive
function addFive(input) {
    console.log(input + ' + 5 = ' + (parseFloat(input) + 5));
}

addFive(5);
addFive(37);
addFive(-5);
addFive(28.66);

//Function Drill Six: isMultipleOfFive
function isMultipleOfFive(input) {
    if(parseFloat(input) % 5 === 0) {
        console.log(input + ' is a multiple of five.');
    } else {
        console.log(input + ' is not a multiple of five.');
    }
}

isMultipleOfFive(5);
isMultipleOfFive(6);
isMultipleOfFive(780);
isMultipleOfFive(8675309);

//Function Drill Seven: isThree
function isThree(input) {
    if(input == 3) {
        console.log(input + ': Yep. That\'s three');
    } else {
        console.log(input + ': ...do I really need to tell you that isn\'t three? Seriously, dude.');
    }
}

isThree(3);
isThree(6);
isThree(974);

//Function Drill Eight: isMultipleOfThree
function isMultipleOfThree(input) {
    if(parseFloat(input) % 3 === 0) {
        console.log(input + ' is a multiple of three.');
    } else {
        console.log(input + ' is not a multiple of three.');
    }
}

isMultipleOfThree(3);
isMultipleOfThree(6);
isMultipleOfThree(780);
isMultipleOfThree(8675309);
isMultipleOfThree(27);

//Function Drill Eight: isMultipleOfThreeAndFive
function isMultipleOfThreeAndFive(input) {
    if(parseFloat(input) % 3 === 0 && parseFloat(input) % 5 === 0) {
        console.log(input + ' is a multiple of three and five.');
    } else {
        console.log(input + ' is not a multiple of three and five.');
    }
}

isMultipleOfThreeAndFive(3);
isMultipleOfThreeAndFive(6);
isMultipleOfThreeAndFive(780);
isMultipleOfThreeAndFive(8675309);
isMultipleOfThreeAndFive(30);

//Function Drill Nine: isMultipleOf(target, n)
function isMultipleOf(target, n) {
    if(target % n === 0) {
        console.log(target + ' is divisible by ' + n);
    } else {
        console.log(target + ' is not divisible by ' + n);
    }
}

isMultipleOf(25, 5);
isMultipleOf(25, 4);
isMultipleOf(80085, 420);
isMultipleOf(27,9);
isMultipleOf(8675309, 3);

//Function Drill Ten: isTrue
function isTrue(boolean) {
    if(boolean === true) {
        console.log(boolean + ": Yep. That be truthy, my guy.");
    } else {
        console.log(boolean + ': Nope. That is not truthy, my guy.');
    }
}

isTrue("Seven");
isTrue(true);
isTrue(false);
isTrue(769);

//Function Drill Eleven: isFalse
function isTrue(boolean) {
    if(boolean === false) {
        console.log(boolean + ": Yep. That is falsy, my guy.");
    } else {
        console.log(boolean + ': Nope. That is not falsy, my guy.');
    }
}

isTrue("Seven");
isTrue(true);
isTrue(false);
isTrue(769);

//Function Drill Twelve: isTruthy
/*
function isTruthy(input) {

}*/





//Function Drill Thirteen: isFalsy
/*function isFalsy(input) {

}*/

//Function Drill Fourteen: isVowel
function isVowel(letter) {
        let result;
        result = (letter.toUpperCase() == 'A' || letter.toUpperCase() == 'E' || letter.toUpperCase() == 'I' || letter.toUpperCase() == 'O' || letter.toUpperCase() == 'U');
        console.log(letter + ' is a vowel? ' + result);
}

isVowel('e');
isVowel('a');
isVowel('A');
isVowel('f');
isVowel('v');

//Function Drill Fifteen: isConsonant
function isConsonant(letter) {
    let result;
    result = !(letter.toUpperCase() == 'A' || letter.toUpperCase() == 'E' || letter.toUpperCase() == 'I' || letter.toUpperCase() == 'O' || letter.toUpperCase() == 'U');
    console.log(letter + ' is a consonant? ' + result);
}

isConsonant('e');
isConsonant('a');
isConsonant('A');
isConsonant('f');
isConsonant('v');

//Function Drill Sixteen: isCapital
function isCapital(letter) {
    return letter.toUpperCase() == letter;
}

console.log('E is capitalized: ' + isCapital('E'));
console.log('e is capitalized: ' + isCapital('e'));
console.log('W is capitalized: ' + isCapital('W'));
console.log('d is capitalized: ' + isCapital('d'));

//Function Drill Seventeen: isLowerCase
function isLowerCase(letter) {
    return letter.toLowerCase() == letter;
}

console.log('E is lowercase: ' + isLowerCase('E'));
console.log('e is lowercase: ' + isLowerCase('e'));
console.log('W is lowercase: ' + isLowerCase('W'));
console.log('d is lowercase: ' + isLowerCase('d'));

//Function Drill Eighteen: hasLowerCase
function hasLowerCase(string) {
    return string.toUpperCase() != string;
}

console.log('Does this have any lowercase characters? ' + hasLowerCase('Does this have any lowercase characters?'));
console.log('WHAT ABOUT THIS ONE? ' + hasLowerCase('WHAT ABOUT THIS ONE?'));
console.log('OK OK, FOR REAL WHAT ABoUT THIS ONE? ' + hasLowerCase('OK OK, FOR REAL WHAT ABoUT THIS ONE?'));

//Intrinsically Motivated Bonus Function: hasUpperCase
function hasUpperCase(string) {
    return string.toLowerCase() != string;
}

console.log('Cool. So far so good (more or less)! Does this one have ANY capital letters? ' + hasUpperCase('Cool. So far so good (more or less)! Does this one have ANY capital letters?'));
console.log('and this one? ' + hasUpperCase('and this one?'));
console.log('Casey said you need to sleep. Go to bed, fool. And yes this one is ' + hasUpperCase('Casey said you need to sleep. Go to bed, fool. And yes this one is'));


//Function Drill Nineteen: isSpace

function isSpace(letter) {
    return letter == ' ';
}

console.log('Is " " a space? It\'s ' + isSpace(' '));
console.log('Is "8" a space? It\'s ' + isSpace('8'));
console.log('Is "k" a space? It\'s ' + isSpace('k'));
console.log('Is "W" a space? It\'s ' + isSpace('W'));

//Function Drill Twenty: isZero(number)
function isZero(number) {
    if (number == 0) {
        console.log('Yep. ' + number + ' is a zero alright.');
    } else console.log('You know what? I don\'t think ' + number + ' is a zero.');
}

isZero('0');
isZero('zero');
isZero('O');
isZero('K');
isZero(9);
isZero(0);

//Function Drill Twenty-One: notZero(number)
function notZero(number) {
    if (number != 0) {
        console.log('Yep. ' + number + ' isn\'t a zero.');
    } else {
        console.log('You know what? ' + number + ' is not not a zero.');
    }
}

notZero('0');
notZero('zero');
notZero('O');
notZero('K');
notZero(9);
notZero(0);

//Function Drill Twenty-Two: lowerCase(string)
function lowerCase(string) {
    console.log(string.toLowerCase());
}

lowerCase('I\'m not sure what this function was supposed to actually do.');
lowerCase('I THINK IT WAS SUPPOSED TO MAKE EVERYTHING LOWERCASE');
lowerCase('I\'m not ONE HUNDRED percent sure, though.');

//Function Drill Twenty-Three: double(n)
function double(n) {
    if (isNaN(n)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + n + ' is.');
    } else {
        let doubled = n * 2;
        console.log(n + ' times 2 is ' + doubled);
    }
}

double(2);
double(.5);
double(210);
double("5");
double('seven');
double('~');

//Function Drill Twenty-Three: triple(n)
function triple(n) {
    if (isNaN(n)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + n + ' is.');
    } else {
        let tripled = n * 3;
        console.log(n + ' times 3 is ' + tripled);
    }
}

triple(2);
triple(.5);
triple(210);
triple("5");
triple('seven');
triple('~');

//Function Drill Twenty-Four: quadruple(n)
function quadruple(n) {
    if (isNaN(n)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + n + ' is.');
    } else {
        let quadrupled = n * 4;
        console.log(n + ' times 4 is ' + quadrupled);
    }
}

quadruple(2);
quadruple(.5);
quadruple(210);
quadruple("5");
quadruple('seven');
quadruple('~');

//Function Drill Twenty-Five: half(n)
function half(n) {
    if (isNaN(n)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + n + ' is.');
    } else {
        let halved = n * .5;
        console.log(n + ' halved is ' + halved);
    }
}

half(2);
half(.5);
half(210);
half("5");
half('seven');
half('~');

//Function Drill Twenty-Six: subtract(a, b)
function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + a + ' or ' + b + ' is.');
    } else {
        let subtracted = a - b;
        console.log(a + ' minus ' + b + ' is ' + subtracted);
    }
}

subtract(2 , 5);
subtract(10, 1);
subtract(675, 255);
subtract("5", "4");
subtract('seven', 'two');
subtract('~', 'L');

//Function Drill Twenty-Seven: multiple(a, b)
function multiple(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + a + ' or ' + b + ' is.');
    } else {
        let multiplied = a * b;
        console.log('Did you know that ' + a + ' times ' + b + ' equals ' + multiplied + '? Crazy right?');
    }
}

multiple(2, 5);
multiple(10, 1);
multiple('2', 210);
multiple('~', '7');
multiple(.25, 1769);

//Functions Drill Twenty-Eight: divide(a, b)
function divide(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + a + ' or ' + b + ' is.');
    } else {
        let divided = a / b;
        console.log('Did you know that ' + a + ' divided by ' + b + ' equals ' + divided + '? Crazy right?');
    }
}

divide(2, 5);
divide(10, 1);
divide('2', 210);
divide('~', '7');
divide(.25, 1769);

//Functions Drill Twenty-Nine: remainder(a, b)
function remainder(a , b) {
    if (isNaN(a) || isNaN(b)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + a + ' or ' + b + ' is.');
    } else {
        let remains = a % b;
        console.log('The remainder after dividing ' + a + ' by ' + b + ' is ' + remains);
    }
}


remainder(5, 2);
remainder(9, 9);
remainder(9, 3);
remainder(100, 23);
remainder('Chuck Norris');

//Functions Drill Thirty: modulo(a, b)...also how is this one different than the last one?
//I dunno
function modulo(a, b) {
    if (isNan(a) || isNan(b)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + a + ' or ' + b + ' is.');
    } else {
        let remains = a % b;
        console.log('The remainder after dividing ' + a + ' by ' + b + ' is ' + remains);
    }
}

remainder(87, 2);
remainder(28371, 9);
remainder(9, 3);
remainder(1000003, 23);
remainder('James', ' 80085');

//Functions Drill Thirty-One: cube(n)
function cube(n) {
    if (isNaN(n)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + n + ' is.');
    } else {
        let cubed = n * n * n;
        console.log(n + ' cubed is ' + cubed);
    }
}

cube(1);
cube('F');
cube(' ');
cube('91');
cube(100*2);

//Functions Drill Thirty-Two: squareRoot(n)
function squareRoot(n) {
    if (isNaN(n)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + n + ' is.');
    } else {
        let rooted = Math.sqrt(n);
        console.log('The square root of ' + n + ' is ' + rooted);
    }
}

squareRoot(9);
squareRoot(8675309);
squareRoot('Method Man');
squareRoot('785');

//Functions Drill Thirty-Three: cubeRoot(n)
function cubeRoot(n) {
    if (isNaN(n)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + n + ' is.');
    } else {
        let rooted = Math.cbrt(n);
        console.log('The cube root of ' + n + ' is ' + rooted);
    }
}

cubeRoot(9);
cubeRoot(8675309);
cubeRoot('Method Man');
cubeRoot('785');

//Functions Drill Thirty-Four: invertSign(number)
function invertSign(number) {
    if (isNaN(number)) {
        console.log(!(isNaN(number)));
    }
     else {
        let inverted = number * -1;
        console.log('The opposite of ' + number + ' is ' + inverted)
    }
}

invertSign(-5);
invertSign(5);
invertSign('J');
invertSign('7900');

//Functions Drill Thirty-Five: degreeToRadians(number)
//Math stuff: 1° × π/180 = 0.01745rad

function degreesToRadians(number) {
    if (isNaN(number)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + number + ' is.');
    } else {
        let rToDConverted = number * Math.PI / 180;
        console.log(number + ' degrees converted to radians is ' + rToDConverted + 'rad');
    }
}

degreesToRadians(9);
degreesToRadians(8675309);
degreesToRadians('Method Man');
degreesToRadians('785');

//Functions Drill Thirty-Six: radianstoDegrees(number)
//Math stuff: 1rad × 180/π = 57.296°
function radiansToDegrees(number) {
    if (isNaN(number)) {
        console.log('Hey, man. I can only do so much. Please give me numbers. Not whatever ' + number + ' is.');
    } else {
        let dToRConverted = number * 180 / Math.PI;
        console.log(number + ' radians converted to degrees is ' + dToRConverted + ' degrees');
    }
}

radiansToDegrees(9);
radiansToDegrees(8675309);
radiansToDegrees('Method Man');
radiansToDegrees('785');

//Functions Drill Thirty-Seven: isBlank(input)
//function isBlank(input) {
//
//}

//Functions Drill Thirty-Eight: trim(string)
function trim(string) {
    if ((typeof string) === 'string') {
        console.log(string.trim());
    } else {
        console.log(string + '? No way. Give me a string and I\'ll do it but otherwise no.');
    }
}

trim('      Hello    ');
trim(7);
trim('   <-----NO WHITESPACE IF WORKING----->         ');

//Functions Drill Thirty-Nine: areEqual(input1, input2)
function areEqual(input1, input2) {
    if (input1 == input2) {
        console.log('Yep. ' + input1 + ' and ' + input2 + ' are equal, even if not identical inputs.');
    } else {
        console.log('Nope. ' + input1 + ' and ' + input2 + ' are not equal.');
    }
}

areEqual('5', 5);
areEqual(19, 19);
areEqual('Thank you', 'Thank you');
areEqual('Blah', 'POTUS');
areEqual(275, 6234);

//Functions Drill Forty: areIdentical(input1, input2)
function areIdentical(input1, input2) {
    if (input1 === input2) {
        console.log('Yep. ' + input1 + ' and ' + input2 + ' are truly identical inputs.');
    } else {
        console.log('Nope. ' + input1 + ' and ' + input2 + ' might be equal, but are not identical inputs.');
    }
}

areIdentical('Snoop D-O-double-G', 'Snoop Dogg');
areIdentical(7, '7');
areIdentical(740+1, 740+1);
areIdentical('Ghostface Killah', 'Ghostface Killah');