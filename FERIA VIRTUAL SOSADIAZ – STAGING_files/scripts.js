/**
 * Custom JS
 */
$(document).ready(function(){
    // Toast - Notificacions
    $('.toast').toast('show');

    // Clock
    moment.locale('es');
    var update = function () {
        currentTime = moment(new Date());
        $('.timer').html(currentTime.format('dddd hh:mm:ss a'));
    };

    $(function(){
        update();
        setInterval(update, 1000);
    });




    // counter
    //                  MONTH/DAY/YEAR HOUR 
    var end = new Date('07/30/2020 10:15 AM');
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EVENTO FINALIZADO';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);

        if (document.getElementById('countdown') !=null ){
            document.getElementById('countdown').innerHTML = days + ' : ';
            document.getElementById('countdown').innerHTML += hours + ' : ';
            document.getElementById('countdown').innerHTML += minutes + '  ';
        }
    }
    timer = setInterval(showRemaining, 1000);
    // end counter

});