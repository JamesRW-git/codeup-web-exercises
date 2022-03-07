'use strict';

// document.addEventListener('click', function () {
//     alert('You clicked something!');
// })
//or
let handler = function(event) {
    alert('You clicked something!');
}
//Function Expression only Accessible Below Here
// document.addEventListener('click', handler);

//Access/grab element
let header = document.querySelector('#main-header');

//Attach Event Listener
header.addEventListener('click', headerClick);

//What happens on Header Click
function headerClick() {
    header.style.backgroundColor = 'yellow';
}

let input = document.querySelector('#search');
// input.addEventListener('keyup', function(event){
//     //Print element
//     console.log(event.target);
//     //Print Key-code
//     console.log(event.code);
// });

input.addEventListener('keyup', upperCaseTextInput);

//Changes all input to upper case
function upperCaseTextInput(event) {
    console.log(event.target.value);
    event.target.value = event.target.value.toUpperCase();
}

//Toggles back and forth between More/Less and showing hidden text
let moreBtn = document.querySelector('#more')

moreBtn.addEventListener('click', function(event){
    let p = event.target.previousElementSibling;
    if (p.classList.contains('hidden')) {
        p.classList.remove('hidden');
        event.target.innerText = 'Less';
    } else {
        p.classList.add('hidden');
        event.target.innerText = 'More';
    }
});


