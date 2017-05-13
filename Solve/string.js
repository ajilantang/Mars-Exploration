function getEncryp(x){
    charCode()
    return (y) => {
        return x+y
    }
}



function test(array){
    let string = array.split('')
    return string.map((x)=>getEncryp(x)(2))
}

console.log(test("adasfafa"))