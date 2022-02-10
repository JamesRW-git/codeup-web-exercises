"use strict";
//Exercise 1 was making for_loops.js and linking it to loops.html
//Exercise For Loops 2
/*function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++) {
        console.log(num + ' multiplied by ' + i + ' is ' + (num * i));
    }
}

showMultiplicationTable(79);*/

//Exercise For Loops 3
/*function getRandomNumber(maxRandom , minRandom) {
    return Math.floor(Math.random() * (maxRandom - minRandom) + minRandom);
}
for(var r = 1; r <= 10; r++) {
    let rando = getRandomNumber(200, 20);
    if(rando % 2 === 0) {
        console.log(rando + ' is even');
} else {
        console.log(rando + ' is odd');
    }
}*/

//Exercise For Loops 4
//Frustratingly satisfying
function numberTree(height) {
    for (let i = 1; i <= height ; i++) {
        let tree = i;
        let space ='' + i;
        let gap = space.repeat(i - 1);
            tree = gap + tree;
        console.log(tree);
    }
}

numberTree(9);

//Example that I built off of to eventually figure out exercise 4
//function drawTree(height) {
//    for ( let i = 0; i < height ; i++ ) {
//        let star = '*';
//        let space = ' ';
//
//        for ( let j = 1; j <= i; j++ ) {
//            star = star + '**';
//        }
//
//        let gap = space.repeat(height-i-1);
//        star = gap + star;
//        console.log(star);
//    }
//}
//
//let number = prompt('Give number for tree height');
//
//drawTree(number);

//For Loops Exercise Five
/*function hundredToFive(num) {
    for(var i = num; i >= 5 ; i -= 5) {
        console.log(i);
    }
}

hundredToFive(100);*/



















