
function getDeterminant(array){
    let rightDiagonal = array.reduce((acc,current,index,arr) => {
                           return acc+arr[index][index]
                        },0)
    let leftDiagonal = array.reduce((acc,current,index,arr) => {
                           return acc+arr[index][(arr.length-1)-index]
                        },0)
    return (Math.abs(leftDiagonal-rightDiagonal))
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    console.log(getDeterminant(a))

}