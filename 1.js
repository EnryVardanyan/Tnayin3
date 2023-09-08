let matrix = [[5,6],[10,23],[11,15]]
function biggestSum(mat){ 
    let returnedArr = []
        for(arr of mat){
            let sum = 0
            for(el of arr){
                sum += el
            }
            returnedArr.push(sum)
        }
 return returnedArr
}
console.log(biggestSum(matrix))