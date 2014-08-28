/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $("#message").hide();
    $("#light").click(function() {
        colorful = !colorful;
        playanimation();

    });

});
function playanimation() {

    if (colorful) {
        $(".quote").toggle();
        $("#light").animate({
            top: "+=30%"
        }, 1000, function() {
            $("#message").fadeIn("slow");
        });

    }
    else {
        $("#message").fadeOut("fast");
        $("#light").animate({
            top: "-=30%"
        }, 1000, function() {
            $(".quote").toggle();

        });
    }
}
