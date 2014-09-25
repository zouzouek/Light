/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var signingList=[];

$(document).ready(function() {
    $(".message").hide();
    $("#light").click(function() {
        colorful = !colorful;
        playanimation();
    });
    $("#join").click(function() {
        openSign();
    });
    $("#sign").click(function() {
        if (ValidateInput()) {
            writeSignature();

            emptyError();
        } else {
            showError();
        }

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

function openShare() {
    $("#petition").fadeOut("fast");
    $("#share").fadeIn("slow");
}
function openSign() {
    $("#message").fadeOut("fast");
    $("#petition").fadeIn("slow");
}

function ValidateInput() {

    if (!$("#name").val() || !$("#age").val()) {
        return false;
    }
    return true;
}
function showError() {
    $("#error").html("Please Fill all the fields before signing.")
}

function emptyError() {
    $("#error").html("");
}

function writeSignature() {
    var name = $("#name").val();
    var age = $("#age").val();

    var myFirebaseRef = new Firebase("https://torid-fire-4034.firebaseio.com/");
    myFirebaseRef.push({
        name: name,
        age: age
    });
    myFirebaseRef.once('value', function(snapshot) {
        
        fillList(snapshot.val());

    }, function(errorObject) {
        console.log('The read failed: ' + errorObject.code);
    });
    
    openShare();
}

function fillList(list){
    signingList=[];
    for( var item in list){
        var person = list[item];
        var signature =person.name+" "+person.age;
        signingList.push(signature);
    }
    setSignatureNb();
}

function setSignatureNb(){
      var signatureNb=1;
     signatureNb= signingList.length;
    $("#nb-singatures").html(signatureNb);
}

function displayList(){
    
}