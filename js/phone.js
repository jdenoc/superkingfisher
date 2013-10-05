window.ondeviceorientation = function(e) {
    tiltZAxis = parseFloat( e.gamma );
    tiltXAxis = parseFloat( e.beta );
    tileYAxis = parseFloat( e.alpha );
    $("#vals").html(tiltXAxis+","+tileYAxis);
    $.ajax({
        type: 'GET',
        url: './move.php?x='+tiltXAxis+'&y='+tileYAxis,
        cache: false,
        beforeSend:function(){ },
        success:function(data){

        },
        error:function(){ }
    });
}