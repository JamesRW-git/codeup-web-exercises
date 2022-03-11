"use strict";

$('li').css('font-size', '20px');

$('li, p, h1').css('color', '#870481');

let headerAlertVar = $('h1').html();

$('h1').click(function(){
    alert(headerAlertVar);
})

$('#theList').css('border', 'blue dashed .25rem');

$('label').css('color', '#289448');