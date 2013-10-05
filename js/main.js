// Position Variables
var x = 0;
var y = 0;

// Speed - Velocity
var vx = 0;
var vy = 0;

// Acceleration
var ax = 0;
var ay = 0;

var gameHeight = 750;
var gameWidth = 750;

var vMultiplier = 0.01;

$(function() {
    setTimeout(function () {
        moveBox();
    }, 10);
});

function moveBox(){
    $.ajax({
        type: 'GET',
        url: './coordinates.txt?&x='+nocache(),
        cache: false,
        beforeSend:function(){ },
        success:function(data){
            var coordinates = data.split(",");


            $("#box").animate({top: y + "px", left: x + "px"}, 10, "swing");
            setTimeout(function () {
                moveBox();
            }, 10);
        },
        error:function(){ }
    });
}

function nocache(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}