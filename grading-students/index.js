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

function solve(grades){
    // Complete this function
    const result = [];
    
    grades.forEach(val => {
        if(40 - val < 3){
            // The grade that not falling grade
            if(val%5 >= 3) {
                return result.push(val-(val%5) + 5);
            } else {
                return result.push(val)
            }
        } else {
            // The grade that falling grade
            return result.push(val)
        }
    });
    
    return result
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    result.forEach(val => console.log(val));
    


}
