window.ondeviceorientation = function(e) {
    tiltZAxis = parseFloat( e.gamma );
    tiltXAxis = parseFloat( e.beta );
    tileYAxis = parseFloat( e.alpha );
    $("#vals").html(tiltXAxis+","+tileYAxis);
}