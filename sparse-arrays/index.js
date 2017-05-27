function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let n = parseInt(input[0])
    let q = parseInt(input[n+1])
    let nCol = []
    let qCol = []
    
    for(var i = 1; i < n+1; i++) {
        nCol.push(input[i])
    }
    
    for(var i = n + 2; i < n+q+2; i++) {
        qCol.push(input[i])
    }
    
    let result = qCol.map(query =>{
        var count = 0
        nCol.forEach(word => {
            if(query == word){
                count++
            }
        })
        
        return count
    })
    
    result.forEach(val => {
        console.log(val)
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

