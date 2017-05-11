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
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var aLen = a.length - 1;
    
    var diagonal1 = [];
    var diagonal2 = [];
   
    for(var i = 0; i <= aLen; i++){
        diagonal1.push(a[i][i]);
    }
    
    for(var j = aLen; j >= 0; j--){
        var i = Math.abs(j-aLen);
        diagonal2.push(a[j][i]);
    }
    
    diagonal1 = diagonal1.reduce(function(prev, next){return prev + next});
    diagonal2 = diagonal2.reduce(function(prev, next){return prev + next});
    
    var result = Math.abs(diagonal1 - diagonal2);
    
    console.log(result);

}

