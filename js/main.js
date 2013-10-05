var player1 = [];
player1['start_x'] = null;
player1['start_x'] = null;
player1['y_min'] = null;
player1['y_max'] = null;
player1['x_min'] = null;
player1['x_max'] = null;

var yPixelSize = 20;
var xPixelSize = 11;
var degreeDistance = 30;

var hookHeight = 100;
var hookWidth = 100;

var gameWidth = 1200;
var gameHeight = 660;

$(function() {
    setTimeout(function () {
        moveBox();
    }, 10);
});

function moveBox(){
    $.ajax({
        type: 'GET',
        url: './coordinates/player1.txt?&x='+nocache(),
        cache: false,
        beforeSend:function(){ },
        success:function(data){
            var coordinates = data.split(",");
            var y = parseInt(coordinates[0]);
            var x = parseInt(coordinates[1]);

            if (player1['start_x'] == null){
                player1['start_x'] = x;
                player1['start_y'] = y;

                player1['y_min'] = y-degreeDistance;
                player1['y_max'] = y+degreeDistance;
                player1['x_min'] = x-degreeDistance;
                player1['x_max'] = x+degreeDistance;
            }
            else{

                var xPos = null;
                var yPos = null;

                // outside of pre-determined bounds
                if (x <= player1['x_min']){
                    xPos = 0;
                }
                else if (x >= player1['x_max']){
                    xPos = gameWidth-hookWidth;
                }
                if (y <= player1['y_min']){
                    yPos = 0;
                }
                else if (y >= player1['y_max']){
                    yPos = gameHeight-hookHeight;
                }

                //inside bounds
                if (xPos == null){
                    xPos = (x - player1['x_min']) * xPixelSize;
                }

                if (yPos == null){
                    yPos = (y - player1['y_min']) * yPixelSize;
                }

                $("#box").animate({top: yPos + "px", left: xPos + "px"}, 10, "swing");
            }
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