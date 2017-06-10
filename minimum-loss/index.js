function processData(input) {
    var numberOfYear = input.split('\n')[0];
    var priceArray = input.split('\n')[1];
    var minLoss = [];
    var result;
    
    priceArray = priceArray.split(' ');
    for(var i = 1; i <= numberOfYear; i++){
        var price = priceArray.filter((value,index)=>{
            var minIndex = i - 1;
            if(index >= minIndex) {
                return true
            }
            return false
        });
        

        
        if(price.length > 1){
            price.forEach((value, index) => {
                if(index > 0) {
                    price[0] - value >= 0 ? minLoss.push( price[0] - value ) : null
                }
            })
        }

    }
    
    result = minLoss.sort((a,b) => a-b);
    console.log(result[0])
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