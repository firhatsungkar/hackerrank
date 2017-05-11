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
    var result = [];
    for(var i = 1; i <= n; i++){
        var hash = [];
        for(var j = 1; j <= i; j++){
            hash.push(['#']);
        }
        result.push(hash);
    }
    
    result = result.map((val)=>{
        var spaceLen = result.length - val.length;
        for(var i = 1; i <= spaceLen; i++){
            val.unshift(' ');
        }
        return val.join('');
    });
    
    result.forEach(val => console.log(val));

}
