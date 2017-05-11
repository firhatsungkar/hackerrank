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

function solve(a0, a1, a2, b0, b1, b2){
    // Complete this functionresult.push(a0 == b0 ? 0 : 1);
    
    var aScore = 0;
    var bScore = 0;
    
    for(var i in arguments){
        if(!(arguments[i] >= 1 && arguments[i] <= 100)){
            return [aScore, bScore]
        }
    }
    
    function Test(val1, val2){
        if(val1 > val2){
            aScore++
        } else if (val1 < val2) {
            bScore++
        }
    }
    
    Test(a0, b0);
    Test(a1, b1);
    Test(a2, b2);
    
    return [aScore, bScore];
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
    


}

