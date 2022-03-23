// "use strict";

const super_secret_key = {name: 'james', age: 35}; //CONST: strings are immutable, but objects are not

//differences b/t let and var
// {
//     let sample = 'hi there';
//     {
//         {
//             {
//                 {
//                     console.log(sample)
//                 }
//             }
//         }
//     }
// }


// let sample = 'hi there';
//
// let scopeyBoi = function(){
//     console.log(sample);
// }
//
// scopeyBoi();

function notLexicalThings(){
    console.log(this);
}

notLexicalThings();


// let lexicalThings = () => {
//     this['new prop'] = 'string boi';
//     console.log(this);
// }
//
// lexicalThings();