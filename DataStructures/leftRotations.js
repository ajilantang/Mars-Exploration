function processData(input) {
    //Enter your code here
    let d       = input.split('\n')[0].split(' ')[1]
    let list    = input.split('\n')[1].split(' ') 
     console.log(getRotate(list)(d).join(' '))
} 

function getRotate(list){
    return (digit) => {
        let input = list.splice(digit,(list.length-digit))
        return input.concat(list)
    }
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