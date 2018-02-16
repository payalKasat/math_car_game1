/**
 * Created by ashwi on 6/5/2017.
 */
function move_car_to_back() {

    if(score === -1 || score === 0){
        $('#car').addClass('car_begging').removeClass('car_move');
    }
    else if(score === 1){
        $('#car').addClass('car_move').removeClass('car_move2');
    }
    else  if(score === 2){
        $('#car').addClass('car_move2').removeClass('car_move3');
    }



}
function move_car_to_next(){
    // current_position++;
    // if(current_position==positions.length){
    //     current_position=0;
    // }
    position_car(positions[score]);
    if(score === 1){
       $('#car').addClass('car_move');
    }
    else if(score ===2 ){
        $('#car').addClass('car_move2').removeClass('car_move');
    }
    else if(score ===3 ){
        $('#car').addClass('car_move3').removeClass('car_move2');
    }
    else if(score ===4 ){
        $('#car').addClass('car_move4').removeClass('car_move3');
    }
    else if(score ===5 ){
        $('#car').addClass('car_move5').removeClass('car_move4');
    }
    else if(score ===6 ){
        $('#car').addClass('car_move6').removeClass('car_move5');
    }
    else if(score ===7 ){
        $('#car').addClass('car_move7').removeClass('car_move6');
    }
    else if(score ===8 ){
        $('#car').addClass('car_move8').removeClass('car_move7');
    }
    else if(score ===9 ){
        $('#car').addClass('car_move9').removeClass('car_move8');
    }
    else if(score ===10 ){
        $('#car').addClass('car_move10').removeClass('car_move9');
    }
    else if(score === 11){
        $('#car').removeClass('car_move10');
    }

}

function init_car(){
    var position_object = positions[0];
    console.log('i am here');
    $("#car").css({
        transform: 'rotateZ('+position_object.angle+'deg)'
    });
}

function position_car(position_object){
    console.log('here');

    $("#car").animate({  borderSpacing: position_object.angle }, {
        step: function(now,deg) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');

        },
        duration:4000
    },'linear');
}

var positions = [
    {
        angle: 0
    },
    {
        angle: 0
    },
    {
        angle: 0
    },
    {
        angle: 0
    },
    {
        angle: 90
    },
    {
        angle: 90
    },
    {
        angle: 360
    },
    {
        angle: 360
    },
    {
        angle: 360
    },
    {
        angle: 90
    },
    {
        angle: 90
    },
    {
        angle: 0
    }
];

