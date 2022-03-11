"use strict";

$('li').css('font-size', '20px');

$('li, p, h1').css('background-color', '#fcf98b');

let headerAlertVar = $('h1').html();

$('h1').click(function(){
    alert(headerAlertVar);
})

$('#theList').css('border', 'blue dashed .25rem');

$('label').css('backgcolor', '#289448');