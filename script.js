let sec = 0;
let min = 0;
let hour = 0;

function zero(digit) {
    if (digit < 10) {
        return ('0' + digit);
    } else {
        return (digit);
    }
}

function start() {
    interval = setInterval(watch, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    document.querySelector('#timer').innerHTML = '00:00:00';
}

function watch() {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if (min == 60) {
            min = 0;
            hour++;
        }
    } 

    document.querySelector('#timer').innerHTML = zero(hour) + ':' + zero(min) + ':' + zero(sec);
}
