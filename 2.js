let matrix = [[5,6],[10,23],[11,15]]
function arrOfMins(mat){
    let returnedArr = []
    for(arr of mat){
        returnedArr.push(Math.min(...arr))
    }
    return returnedArr
}
console.log(arrOfMins(matrix))