function islessZero(x){
    return (y) => {
        if(Math.abs(x-y) <= 1){
            return 1
        }else {
            return 0
        }
    }
}


function getCompare(arr){
    let result = 0;
    let checker = []
       for(let x =0 ; x < arr.length ; x++){
           for(let y=x++;y<arr.length;y++){
               console.log(x,y)
               if(checker.includes(`${arr[x]}x${arr[y]}`)||x===y){
                   result+=0
               }
               else{
                   checker.push(`${arr[x]}x${arr[y]}`)
                   result+=islessZero(arr[x])(arr[y])
              }    
           }
       }
    return result
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    let arr = a
    console.log(getCompare(arr))

}


//badcode haha