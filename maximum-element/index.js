function processData(input) {
    //Enter your code here
    const inputs = input.split('\n');
    const stack = []
    inputs.forEach((input, index) => {
        if(index > 0) {
            switch(parseInt(input[0])) {
                case 1:
                    var value = input.split(' ')
                    stack.push(value[1])
                    break
                case 2:
                    stack.pop()
                    break
                case 3:
                    var sortedStack = (Array.from(stack)).sort((a,b) => b-a)
                    console.log(sortedStack[0])
                    break
            }
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
