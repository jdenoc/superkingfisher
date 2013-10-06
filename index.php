<?php
require_once('Mobile_Detect.php');
$detect = new Mobile_Detect();
if($detect->isMobile()){ ?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super King Fisher | Player Select</title>
    <link href='css/style.css' rel='stylesheet' type='text/css' media='screen' />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
</head>
<body>
    <label>Player 1&nbsp;<input type="radio" onclick="window.location='phone1.php';exit();"></label>
    <label>Player 2&nbsp;<input type="radio" onclick="window.location='phone2.php';exit();"></label>
</body>
</html>
<?php exit; } ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>Super King Fisher</title>
    <link rel='stylesheet' href='http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/themes/base/jquery-ui.css' type='text/css' media='screen' />
    <link rel='stylesheet' href='css/style.css' type='text/css' media='screen' />
    <script src="http://www.google.com/jsapi" type="text/javascript"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
</head>
<body>
<audio preload="auto" autoplay="true"> <source src="mario.mp3" type="audio/mpeg" /> </audio>
<div id="wrapper">
    <div id="abovewater">
            <div class="logo"></div>
            <div id="player1score">
            	<p class="score_left">
                0000000
                </p>

            </div>
            <div id="player2score">
				<p class="score_right">
                0000000
                </p>
            </div>
        </div>
        <div id="time">60</div>
    <div id="background">
    </div>
    <div id="board">
        <div id="rod1"></div>
        <div id="rod2"></div>
    </div>
</div>
</body>
</html>