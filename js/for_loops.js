"use strict";
//Exercise 1 was making for_loops.js and linking it to loops.html
//Exercise For Loops 2
function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++) {
        console.log(num + ' multiplied by ' + i + ' is ' + (num * i));
    }
}

showMultiplicationTable(79);

//Exercise For Loops 3
function getRandomNumber(maxRandom) {
    return Math.floor(Math.random() * (maxRandom - 20) + 20);
}

for(var r = 1; r <= 10; r++) {
    let rando = getRandomNumber(200);
    if(rando % 2 === 0) {
        console.log(rando + ' is even');
} else {
        console.log(rando + ' is odd');
    }
}

//Exercise For Loops 4
//for(var i = 1; i <= 9; i++) {
//    let numChars = i;
//    if()
//}





//    for (var i = 20; i < 200; i++) {
//
//    }
//}