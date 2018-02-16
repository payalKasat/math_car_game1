/**
 * Created by ashwi on 5/8/2017.
 */
$(document).ready(function(){
    select_math_opration();
    init_car();
    $('.enter').click(function () {
        next_num_genration(num1,num2,operator);
    });
    $('.reset').click(function () {
        reset = true;
        reset_game();
    })
});
var current_position = 0;
var perform_math = null;
var num1= null, num2= null;
var num1hard = null; num2hard = null;
var result = null;
var operator = null;
var add = false;
var sub = false;
var multi = false;
var divi = false;
var easy = false;
var hard = false;
var score = 0;
var level = 0;
var reset = false;


function randome_num_generation_easy(){
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);
    console.log('first num',x);
    console.log('second num',y);
    num1 = x;
    num2 = y;
    return {num1:x,num2:y};
}

function randome_num_generation_hard(){
    var x = Math.floor((Math.random() * 50) + 1);
    var y = Math.floor((Math.random() * 10) + 1);
    console.log('first num hard',x);
    console.log('second num hard',y);
    num1hard = x;
    num2hard = y;
    return {num1:x,num2:y};
}

function display_equation(num1, num2,operator){
    $('.math_equation').text(num1 + operator + num2 );
    console.log('math',perform_math);

}

function select_math_opration(){

    $('.addition').click(function () {
            add = true;
            sub = false;
            multi = false;
            divi = false;
            operator = '+';
            $('.add_easy').click(function (){
                easy = true;
                hard = false;
                randome_num_generation_easy();
                perform_math = num1 + num2;
                display_equation(num1 , num2, operator);
            });
            $('.add_hard').click(function (){
                hard = true;
                easy = false;
                randome_num_generation_hard();
                perform_math = num1hard + num2hard;
                display_equation(num1hard , num2hard, operator);
            })
    });
    $('.subtraction').click(function () {
        add = false;
        sub = true;
        multi = false;
        divi = false;
        operator = '-';
        $('.sub_easy').click(function (){
            easy = true;
            hard = false;
            randome_num_generation_easy();
            perform_math = num1 - num2;
            display_equation(num1 , num2, operator);
        });
        $('.sub_hard').click(function (){
            hard =true;
            easy = false;
            randome_num_generation_hard();
            perform_math = num1hard - num2hard;
            display_equation(num1hard , num2hard, operator);
        })
    });
    $('.multiplication').click(function () {
        add = false;
        sub = false;
        multi = true;
        divi = false;
        operator = '*';
        $('.multi_easy').click(function (){
            easy = true;
            hard = false;
            randome_num_generation_easy();
            perform_math = num1 * num2;
            display_equation(num1 , num2, operator);
        });
        $('.multi_hard').click(function (){
            hard = true;
            easy = false;
            randome_num_generation_hard();
            perform_math = num1hard * num2hard;
            display_equation(num1hard , num2hard, operator);
        })
    });
    $('.division').click(function () {
        add = false;
        sub = false;
        multi = false;
        divi = true;
        operator = '/';
        $('.divi_easy').click(function (){
            easy = true;
            hard = false;
            randome_num_generation_easy();
            perform_math = num1 / num2;
            display_equation(num1 , num2, operator);
        });
        $('.divi_hard').click(function (){
            hard = true;
            easy = false;
            randome_num_generation_hard();
            perform_math = num1hard / num2hard;
            display_equation(num1hard , num2hard, operator);
        });

    });
}

    var messages =['','Good Going','Great job','Awesome','Super Champ','You got it','Astonishing','Nice work',
        'Rocking performance','All most there','Yeah, you did it'];
//message array for messages display.

function message_window(message) {
    $('.message_window').fadeIn().text(message).fadeOut(3000);
}
//message window function is displaying message on game board for operation error,
// cheer up message and level complete message display.


function next_num_genration(number1, number2, operator){
    result = $('.equation_ans').val();
    if(number1 == null || number2 == null){
        message_window('select math operation');
    }
    else if(result == perform_math){
        score++;
        move_car_to_next();
        $('.score').text(score);
        message_window(messages[score]);    //equation matches then message display from array by
        // using score.
        console.log('match');
        $('.equation_ans').val('');

        if(score == 11){
            level++;
            score = 0;
            $('.level').text(level);
            $('.score').text(score);
            move_car_to_next();
            message_window('level complete, Next level');   //level complete message by using
        }
        if(easy == true){
            var numbers = randome_num_generation_easy();
            number1 = numbers.num1;
            number2 = numbers.num2;
        }
        else if(hard == true){
            var numbers = randome_num_generation_hard();
            number1 = numbers.num1;
            number2 = numbers.num2;
        }
        if(add == true){
            operator = '+';
            perform_math = number1 + number2;
        }
        else if(sub == true){
            operator = '-';
            perform_math = number1 - number2;
        }
        else if(multi ==true){
            operator ='*';
            perform_math = number1 * number2;
        }
        else if(divi == true){
            operator ='/';
            perform_math = number1 / number2;
        }
        display_equation(number1,number2,operator);
    }
    else {
        if(score == -1){
            score = 0;
        }
        score--;

        $('.score').text(score);
        move_car_to_back();
        message_window('Try again');
    }

}

function reset_game() {
    perform_math = null;
    num1= null; num2= null;
    num1hard = null; num2hard = null;
    result = null;
    operator = null;
    add = false;
    sub = false;
    multi = false;
    divi = false;
    easy = false;
    hard = false;
    score =0;
    level = 0;
    current_position = 0;

    $('.score').text(score);
    $('.level').text(level);
    $('.equation_ans').val(' ');
    $('.math_equation').text(' ');
    if(reset == true){
        $('#car').removeClass('car_move car_move1 car_move2 car_move3 car_move4 car_move5 ' +
            'car_move6 car_move7 car_move8 car_move9 car_move10 car_move11')
            .css('transform','rotate(0)');

    }

}