/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $(".message").hide();
    $("#light").click(function() {
        colorful = !colorful;
        playanimation();
    });
    $("#join").click(function(){
        openShare(); 
    });

});
function playanimation() {

    if (colorful) {
        $(".quote").toggle();
        $("#light").animate({
            top: "+=40%"
        }, 1000, function() {
            $("#message,#design").fadeIn("slow");
        });

    }
    else {
        $(".message").fadeOut("fast");
        $("#light").animate({
            top: "-=40%"
        }, 1000, function() {
            $(".quote").toggle();

        });
    }
}

function openShare(){
    $("#message").fadeOut("fast");
    $("#share").fadeIn("slow");
}
