function processData(input) {
    //Enter your code here
    var rows = input.split('\n')
    var stack = []
    rows.forEach((row) =>{
        var condition = row[0]
        switch(parseInt(condition)){
            case 1:
                row = row.split('')
                row.shift()
                row.shift()
                row = row.join('')
                stack.push(row.length>0 ? parseInt(row) : 0)
                break
            case 2:
                stack.pop()
                break
            case 3:
                var sorted = Array.from(stack).sort((a,b) => b - a)
                console.log(sorted[0])
        }
    })
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

