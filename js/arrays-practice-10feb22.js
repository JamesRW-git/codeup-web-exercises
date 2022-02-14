"use strict";

/*
let myNiceArr = ['James', 'Haley', 'Tyler', 'Martin'];

//Notice getting the length for the condition in the for loop
for (let i = 0; i < myNiceArr.length; i++){
    console.log('Hello, ' + myNiceArr[i] + ', you\'re the best!');
}*/

//Instead of using a bunch of variables, we can use an array
// var dog1 = "Fido";
// var dog2 = "Spot";
// var dog3 = "Fifi";
// var dog4 = "Lola";

//We can create a variable containing an array of elements
//Fido is the first element, even at index 0
//thus even index values would be considered an odd element
//THIS IS A SUBJECTIVE CHOICE, though if in an exercise it should specify
var dogNames = ['Fido', 'Spot', 'Fifi', 'Lola'];
/*var dogAges = [5, 2, 3, 10];
//JS will let you, but try not to do this v----v where we mix data types
var dogs = ['Fido', 5, 'Spot', 2];

//We can display the array to the console easily
console.log('Dog names: ' + dogNames);


//Length of arrays is very important. This will count the number of elements
//in the array
console.log(dogNames.length);

//We can call out an element (the data) at any index (location in array)
//First element is at index 0 and last is at index length - 1
//Remember arrays are 0 based
//So when speaking of accessing arrays say 'the element at index 0',
//'the 0th element', 'array name sub 0'
//'the last element in the array', '
console.log(dogNames[0]); //return FIRST element in array
console.log(dogNames[dogNames.length - 1]); //return LAST element in array
var lastIndex = dogNames.length -1; //creates a variable instead of using long input
console.log(dogNames[lastIndex]); //return LAST element in array

//Log the 2nd element
console.log(dogNames[1]);

//Log 2nd to last element
console.log(dogNames[2]);
console.log(dogNames.length - 2);*/

//Loops and arrays are like 'peas and carrots'
//So let's do a basic counting loop
/*for (var i = 0; i < dogNames.length; i++) {
    //output the ith element in the array
    //output the element sub i
    //output the element at index i
    console.log('Dog at index ' + i + ' is ' + dogNames[i]);
}*/

//Loop it, but backwards and only the odd dogs
//Fido is the first element, even at index 0
//thus even index values would be considered an odd element
//THIS IS A SUBJECTIVE CHOICE, though if in an exercise it should specify
//So to me, the first element is 0 index so it makes sense to think as the 0th element
//Therefore, all odd index values would be considered an odd element
/*for (var i = dogNames.length -1; i >= 0 ; i--) {
    if(i % 2 ===0) {
        console.log('The odd dog at index ' + i + ' is ' + dogNames[i]);
    }
}*/


//for...each
//wants a function
//Use for read only stuff, try not to use if modifying array
/*dogNames.forEach(function(dogName, index) {
    //this function will be executed on EACH element
    //as the forEach iterates over the array
    //output the odd dogs when index 0 is an odd dog

    dogNames[index] = 'Zantor';

    if(index % 2 === 0) {
        console.log('Dog at index ' + index + ' is ' + dogName);
    }

    //break doesn't work in forEach, so if you need to break out don't use
    //a for each
});

console.log(dogNames);*/

var dogNames = ['Fido', 'Spot', 'Fifi', 'Lola'];

//push adds to the end of an array
dogNames.push('Ralph');
console.log(dogNames);

//unshift adds to the beginning of the array
dogNames.unshift('Suzie');
console.log(dogNames);

//pop takes and removes the last element in the array
var poppedName = dogNames.pop();
console.log('Removed ' + poppedName);

//shift takes and removes the first element in the array
var shiftedName = dogNames.shift();
console.log('Removed ' + shiftedName);
console.log(dogNames);

//Build an array with the following words IN ORDER, 1 word at a time
//apple banana cherry lemon mango pear
//ORDER should be pear lemon cherry apple banana mango
var fruits = [];

fruits.unshift('apple'); //puts at beginning
fruits.push('banana'); //puts at end
fruits.unshift('cherry'); //goes to in front of apple
fruits.unshift('lemon'); //goes to in front of lemon
fruits.push('mango'); //goes to the end
fruits.unshift('pear'); //goes to the beginning

console.log(fruits);
//if we wanted to remove some stuff to get back to just apple
fruits.pop(); //removes pear
fruits.pop(); //removes mango
fruits.shift(); //removes banana
fruits.shift(); //removes lemon
fruits.shift(); //removes cherry
console.log(fruits); //displays just apple

//indexOf
var wutang = ['Method Man', 'Inspectah Deck', 'Raekwon the Chef', 'RZA', 'GZA', 'ODB'];
//console.log(wutang.indexOf('Inspectah Deck', 1));

//lastIndexOf
//console.log(wutang.lastIndexOf('RZA'));
//console.log(wutang.lastIndexOf('GZA', 5));

//slice(starting index, ending index)
//console.log(wutang.slice(1));
//console.log(wutang.slice(1,3));

//reverse reverses and modifies the content of the original array
//console.log(wutang.reverse());

//wutang.reverse().forEach(function(wutang, index) {
//    console.log(wutang);
//});

//show backwards iteration
for (let i = wutang.length - 1; i >= 0; i--) {
    console.log(wutang[i]);
}

//sort works for strings (by unicode values) and numbers
let instructors = ['Casey', 'Docrob', 'Ry', 'Jay', 'David'];

instructors.sort();

console.log(instructors);

//splitting and joining
let userInfo = "Ry,Sutton,08/11/1994,rysutton,ford,mustang";

let userInfoArray = userInfo.split(',');
console.log(userInfoArray);

let userInfoAgain = userInfoArray.join(',');
console.log(userInfoAgain);

let dt = new Date().toString();
console.log(dt.split('T')[0]);