function processData(input) {
    //Enter your code here
    // Stack Class
    function Stack() {
        var collections = [];
        this.push = (element) => collections.push(element);
        this.pop = () => collections.pop();
        this.max = () => {
            console.log( Array.from(collections).sort((a,b)=> a-b)[collections.length - 1] )
        }
    };
    // Initiate new stack and Desctructuring input
    var stack = new Stack();
    var input = input.split('\n');
    var max = input.shift();
    
    // Execute
    for(i = 0; i <= max -1; i++) {
        var type = input[i].split(' ')[0]
        var value = input[i].split(' ')[1]
        switch(parseInt(type)) {
            case 1:
                stack.push(value);
                break;
            case 2:
                stack.pop();
                break;
            case 3:
                stack.max();
                break;
        }
    };
    
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