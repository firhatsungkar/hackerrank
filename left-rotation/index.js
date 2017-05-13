function processData(input) {
    //Enter your code here
    // define n, d, array from input
    const n = input.split('\n')[0].split(' ')[0];
    const d = input.split('\n')[0].split(' ')[1];
    let array = input.split('\n')[1].split(' ');
    array = array.slice(0, n);
    var head = array.slice(d, array.length)
    var tail = array.slice(0,d)
    console.log(head.concat(tail).join(' '))
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});