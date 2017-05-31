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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var s = readLine();

        let expectedBracket,
            stack = [],
            opens = ['[','{','('],
            closed = [']','}',')'];
        for(let c of s) {
            if(checkItemInList(opens, c)) {
                stack.push(c);
            } else if(checkItemInList(closed, c)){
                expectedBracket = opens[closed.indexOf(c)];
                
                if(stack.length === 0 || (stack.pop() !== expectedBracket)) {
                    return console.log('NO');
                }
            }
        }
        return console.log('YES');
}

function checkItemInList(list, bracket) {
    return list.indexOf(bracket) > -1
}
