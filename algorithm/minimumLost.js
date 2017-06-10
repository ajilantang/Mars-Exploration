 function processData(input) {
    //Enter your code here
    return (constant) => {
        var result = getCompare(input)(constant)
        if(result.length>0){
            return getCompare(input)(constant).reduce((a, b) => Math.min(a, b))
        }else{
            return 0
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
function getCompare(listBuy){
    return (sell) => {
        const listGreater = getBigger(listBuy)(sell)
        if(listGreater.length > 0){
        return listGreater.map((result) => result - Number(sell))    
        }
        return listGreater
    }
}

function getBigger(listBuy){
    return (constant) => {
        return listBuy.filter((number) => Number(constant) < Number(number))
    }
}
process.stdin.on("end", function () {
    var constant = _input.split('\n')[0]
    var compare  = _input.split('\n')[1].split(' ') 
    console.log(processData(compare)(constant))
});
