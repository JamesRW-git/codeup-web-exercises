"use strict";



//Warmup 14 February 2022
//Create a function called findAverage that finds the average of integers
//across an array

// function findAverage(array){
//     let total = 0;
//     array.forEach(function(item,index) {
//         total += item;
//     });
//     return total / (array.length);
// }
//
// console.log(findAverage([50, 75, 89, 109, 68]));

//Warmup 16 February 2022

// //Defines a contact info object
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress) {
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
//
// //Defines a person object
// function Person(occupation, dob, contactInfo) {
//     //assign a property the value of a function
//     //this helps get the names of a person, but is not executed until you invoke getNames
//     this.getNames = getNames;
//     //Then we actually INVOKE this.getNames() so the names are given when the person object is created
//     this.names = this.getNames();
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
//
// //Define HOW a user gives their name(s) and returns those names as a string array
// function getNames() {
//     let namesArr = [];
//     let hasMoreNames = true;
//     while (hasMoreNames) {
//         //Get the names
//         namesArr.push(prompt('Please enter your name'));
//         //Then, if they want more names keep looping, if not break loop
//         hasMoreNames = confirm('Would you like to enter another name?');
//     }
//     return namesArr;
// }
//
// //Make new person object using the object functions we defined above
// let person2 = new Person(
//     'Fishmonger',
//     '04.25.1986',
//     new ContactInfo(
//         '123.456.7890',
//         '9999 Last St',
//         'LA',
//         '70119',
//         'brokenemail@reliablemail.com')
//     );
//
// //Log the object so we can see the values in the console
// console.log(person2);

//Warmup 18 February 2022
//Create a function which returns true if the given argument is a number, false if it is not a number

// function isANum (input) {
//     if (isNaN(parseFloat(input))) {
//     return false;
//     } else {
//         return true;
//     }
// }
//
// let o = {}
//
// console.log(isANum('Here\'s a string to test'));
// console.log(isANum('5'));
// console.log(isANum(5));
// console.log(isANum(-78));
// console.log(isANum(true));
// console.log(isANum(''));
// console.log(isANum(null));
// console.log(isANum(['array', 'test']));
// console.log(isANum(o));


// should print
// [
//     'mosquito',
//     'scorpion',
//     'mosquito',
//     'typo',
//     'reference error',
//     'type error'
// ]

//My answer
function removeAll(input, wordToRemove) {
    input.forEach(function(word, i) {
        if (word === wordToRemove) {
            input.splice(i, i);
        }
    })
    return input;
}

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));

//Ry's answer
//I like this better, uses a bucket to store anything that is not the word to remove
// function removeAllAgain(anArr, valueToRemove) {
//     let filteredArr = [];
//     anArr.forEach(function(ele) {
//         if (valueToRemove !== ele) {
//             filteredArr.push(ele);
//         }
//         })
//     return filteredArr;
// }
//
// console.log(removeAllAgain(bugs, "ant"));

function removeAllAgainAgain(anArr, valueToRemove) {
    let filteredArr = [];
    for (let i = 0; i < anArr.length; i++) {
        if(valueToRemove === anArr[i]) {
            continue;
        }
    }
    return filteredArr;
}