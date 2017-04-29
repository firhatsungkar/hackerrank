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
    height = readLine().split(' ');
    height = height.map(Number);
    // Find height of the taller candle
    var taller = height.sort((a,b)=> a-b)[height.length - 1];
    // Collect same height candle (The taller)
    var collection = height.filter((val)=> val === taller);
    // Count the collection and print it!
    console.log(collection.length);
    

}
