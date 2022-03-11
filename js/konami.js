"use strict";

$(document).ready(function(){
    $('#enter').css('background-color', 'black').css('color', 'white');

    let konamillionaire = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let konamiPosition = 0;
    $(document).keyup(function(e){
        let expectedKey = konamillionaire[konamiPosition];
        let keyPressed = e.keyCode;

        if(expectedKey === keyPressed) {
            konamiPosition++;
            if (konamiPosition === konamillionaire.length) {
                alert('30 LIVES MANE');
                konamiPosition = 0;
            }
        } else {
            konamiPosition = 0;
        }
    })
});