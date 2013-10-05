window.ondeviceorientation = function(e) {
    tiltZAxis = parseFloat( e.gamma );
    tiltXAxis = parseFloat( e.beta );
    tiltYAxis = parseFloat( e.alpha );
    $("#vals").html(tiltXAxis+"<br />"+tiltYAxis+"<br />"+tiltZAxis);
    $.ajax({
        type: 'GET',
        url: './move.php?x='+tiltXAxis+'&y='+tiltZAxis,
        cache: false,
        beforeSend:function(){ },
        success:function(data){

        },
        error:function(){ }
    });
}