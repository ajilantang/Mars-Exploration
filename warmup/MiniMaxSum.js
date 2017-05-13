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
function getSum(arr){
    return arr.reduce((a,b) => Number(a)+Number(b))
}

function listArr(arr){
    var result = []
    arr.reduce((acc,current,index,array)=>{
       result.push((getSum(array)-Number(array[index])))
       return acc+current
    },0)
    return result
}

function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);

    console.log(Math.min.apply(null,(listArr(a_temp)))+" "+Math.max.apply(null,listArr(a_temp)))

}
