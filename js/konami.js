"use strict";

$(document).ready(function(){
    // $('*').css('border', 'red solid 1px')

    $('#enter').css('background-color', 'black').css('color', 'white');

    let konamillionaire = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let konamiPosition = 0;
    $(document).keyup(function(e){
        let expectedKey = konamillionaire[konamiPosition];
        let keyPressed = e.keyCode;

        if(expectedKey === keyPressed) {
            konamiPosition++;
            if (konamiPosition === konamillionaire.length) {
                // alert('+30 LIVES, MANE. PLAY HARD')
                $('#konamiCode').fadeOut(10000, function(){
                    $('#konamiCode').addClass('d-none');
                    $('#hiddenSnoop').removeClass('d-none');
                });
                konamiPosition = 0;
            }
        } else {
            konamiPosition = 0;
        }
    })
});