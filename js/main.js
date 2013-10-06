var player1 = [];
player1['start_x'] = null;
player1['start_y'] = null;
player1['y_min'] = null;
player1['y_max'] = null;
player1['x_min'] = null;
player1['x_max'] = null;
player1['x'] = 0;
player1['y'] = null;

var player2 = [];
player2['start_x'] = null;
player2['start_y'] = null;
player2['y_min'] = null;
player2['y_max'] = null;
player2['x_min'] = null;
player2['x_max'] = null;
player2['x'] = 0;
player2['y'] = null;

var rodSize = 640;

var yPixelSize = 20;
var xPixelSize = 11;
var degreeDistance = 30;

var hookHeight = 100;
var hookWidth = 100;

var gameWidth = 1200;
var gameHeight = 660;
var fishHeight = 72;
var fishCount = 0;
var yellowFishSpeed = 2000;
var blueFishSpeed = 3000;
var redFishSpeed = 4000;
var deadFishSpeed = 3000;
var bootSpeed = 3000;
var gameTime = 60;

$(function() {
    setTimeout(function () {
        moveRod1();
    }, 25);

    setTimeout(function () {
        moveRod2();
    }, 25);

    setTimeout(function () {
        startFish();
    }, 100);

    setTimeout(function () {
        decrementTime();
    }, 1000);
});

function decrementTime(){
    if (gameTime>0){
        gameTime--;
        $("#time").html("00:"+pad(gameTime,2));
        //recur
        setTimeout(function () {
            decrementTime();
        }, 1000);
    }
    else{
        active = false;
    }
}


function startFish(){
    if (gameTime>0){
        var startTop = Math.floor(Math.random() * (500-fishHeight))+158;
        var fishType = Math.floor(Math.random() * 5);
        if (fishType == 0){
            var tempDiv = "<div class='fish' id='fish_" + fishCount + "'><img src='images/yellow_fish.gif'/></div>";
            $("#board").append(tempDiv);
            $("#fish_" + fishCount).css({'top':startTop});
            $("#fish_" + fishCount).animate({left:gameWidth}, yellowFishSpeed, "swing");
        }
        else if (fishType == 1){
            var tempDiv = "<div class='fish' id='fish_" + fishCount + "'><img src='images/blue_fish.gif'/></div>";
            $("#board").append(tempDiv);
            $("#fish_" + fishCount).css({'top':startTop});
            $("#fish_" + fishCount).animate({left:gameWidth}, blueFishSpeed, "swing");
        }
        else if (fishType == 2){
            var tempDiv = "<div class='fish' id='fish_" + fishCount + "'><img src='images/red_fish.gif'/></div>";
            $("#board").append(tempDiv);
            $("#fish_" + fishCount).css({'top':startTop});
            $("#fish_" + fishCount).animate({left:gameWidth}, redFishSpeed, "swing");
        }
        else if (fishType == 3){
            var tempDiv = "<div class='fish' id='fish_" + fishCount + "'><img src='images/dead_fish.png'/></div>";
            $("#board").append(tempDiv);
            $("#fish_" + fishCount).css({'top':startTop});
            $("#fish_" + fishCount).animate({left:gameWidth}, deadFishSpeed, "swing");
        }
        else if (fishType == 4){
            var tempDiv = "<div class='fish' id='fish_" + fishCount + "'><img src='images/boot.png'/></div>";
            $("#board").append(tempDiv);
            $("#fish_" + fishCount).css({'top':startTop});
            $("#fish_" + fishCount).animate({left:gameWidth}, bootSpeed, "swing");
        }

        fishCount++;

        setTimeout(function () {
            startFish();
        }, 500);
    }
}

function moveRod1(){
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
                player1['start_y'] = 0;

                player1['y_min'] = y-degreeDistance;
                player1['y_max'] = y+degreeDistance;
                player1['x_min'] = x-degreeDistance;
                player1['x_max'] = x+degreeDistance;
            }
            else{

                var xPos = null;
                var yPos = null;

                // outside of pre-determined bounds
                if(x <= player1['x_min']){
                    xPos = 0;
                } else if (x >= player1['x_max']){
                    xPos = gameWidth-hookWidth;
                }
                if(y <= player1['y_min']){
                    yPos = gameHeight-hookHeight;
                } else if (y >= player1['y_max']){
                    yPos = 0;
                }

//                inside bounds
                if (xPos == null){
                    if(x > player1['start_x']){
                        xPos = ( (x - player1['start_x']) * xPixelSize ) + gameWidth/2;
                     } else {
                        xPos = gameWidth/2 - ( (player1['start_x'] - x) * xPixelSize );
                    }
                }

                if (yPos == null){
                    if(y > player1['start_y']){
                        yPos = ( (y - player1['start_y']) * yPixelSize ) + gameWidth/2;
                    } else {
                        yPos = gameHeight/2 - ( (player1['start_y'] - y) * yPixelSize );
                    }
                }

                //check how much things have actually changed
                $("#rod1").animate({top: (yPos-rodSize) + "px", left: xPos + "px"}, 25, "swing");
            }
            setTimeout(function () {
                moveRod1();
            }, 50);
        },
        error:function(){ }
    });
}

function moveRod2(){
    $.ajax({
        type: 'GET',
        url: './coordinates/player2.txt?&x='+nocache(),
        cache: false,
        beforeSend:function(){ },
        success:function(data){
            var coordinates = data.split(",");
            var y = parseInt(coordinates[0]);
            var x = parseInt(coordinates[1]);

            if (player2['start_x'] == null){
                player2['start_x'] = x;
                player2['start_y'] = 0;

                player2['y_min'] = y-degreeDistance;
                player2['y_max'] = y+degreeDistance;
                player2['x_min'] = x-degreeDistance;
                player2['x_max'] = x+degreeDistance;

            } else {

                var xPos = null;
                var yPos = null;

                // outside of pre-determined bounds
                if(x <= player2['x_min']){
                    xPos = 0;
                } else if (x >= player2['x_max']){
                    xPos = gameWidth-hookWidth;
                }
                if(y <= player2['y_min']){
                    yPos = gameHeight-hookHeight;
                } else if (y >= player2['y_max']){
                    yPos = 0;
                }

//                inside bounds
                if (xPos == null){
                    if(x > player2['start_x']){
                        xPos = ( (x - player2['start_x']) * xPixelSize ) + gameWidth/2;
                    } else {
                        xPos = gameWidth/2 - ( (player2['start_x'] - x) * xPixelSize );
                    }
                }

                if (yPos == null){
                    if(y > player2['start_y']){
                        yPos = ( (y - player2['start_y']) * yPixelSize ) + gameWidth/2;
                    } else {
                        yPos = gameHeight/2 - ( (player2['start_y'] - y) * yPixelSize );
                    }
                }

                //check how much things have actually changed
                $("#rod2").animate({top: (yPos-rodSize) + "px", left: xPos + "px"}, 25, "swing");
            }
            setTimeout(function () {
                moveRod2();
            }, 50);
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

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}