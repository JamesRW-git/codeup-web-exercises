"use strict";
$(document).ready(function () {
    // $('li').css('font-size', '20px');
    //
    // $('li, p, h1').css('background-color', '#fcf98b');
    //
    // let headerAlertVar = $('h1').html();
    //
    // $('h1').click(function () {
    //     alert(headerAlertVar);
    // })
    //
    // $('#theList').css('border', 'blue dashed .25rem');
    //
    // $('label').css('background-color', '#289448');
    $('h1').click(function () {
        if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)') {
            $(this).css('background-color', 'rgba(252, 249, 139)');
        } else {
            $(this).css('background-color', 'rgba(0, 0, 0, 0)');
        }
    });

    $('p').dblclick(function () {
        if ($(this).css('font-size') === '16px') {
            $(this).css('font-size', '12px');
        } else {
            $(this).css('font-size', '16px');
        }
    });

    $('li').hover(function(){
        $(this).css('color', 'rgba(166, 2, 2)');
    },
        function(){
        $(this).css('color', 'rgba(0, 0, 0)');
        });
})