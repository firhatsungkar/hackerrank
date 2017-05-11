process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var time = readLine();
    // split time into array
    time = time.split(':');
    
    // get hour, minute, second, isPM from time var
    let hour, minute, second, isPM;
    let re = /[0-9]/gi;
    let re2 = /AM|PM/gi;
    hour = time[0];
    minute = time[1];
    second = time[2].match(re).join('');
    isPM = ( time[2].match(re2).join('').toUpperCase() ) === "PM";

    // convert hour into 24 format if isPM
    if(isPM){
        hour = +hour+12;
        hour = hour === 24 ? 12 : hour;
    } else {
        hour = hour === '12' ? '00' : hour;
    }
    
    // Join into result var and show it
    console.log([hour,minute,second].join(':'));
}

