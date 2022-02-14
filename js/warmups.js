"use strict";


//Create a function called findAverage that finds the average of integers
//across an array
//14 February 2022

function findAverage(array){
    let total = 0;
    array.forEach(function(item,index) {
        total += item;
    });
    return total / (array.length);
}

console.log(findAverage([50, 75, 89, 109, 68]));
