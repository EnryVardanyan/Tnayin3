// 1.

// let matrix = [[5,6],[10,23],[11,15]]
// function biggestSum(mat){ 
//     let returnedArr = []
//         for(arr of mat){
//             let sum = 0
//             for(el of arr){
//                 sum += el
//             }
//             returnedArr.push(sum)
//         }
//  return returnedArr
// }
// console.log(biggestSum(matrix))


// 2.

// let matrix = [[5,6],[10,23],[11,15]]
// function arrOfMins(mat){
//     let returnedArr = []
//     for(arr of mat){
//         returnedArr.push(Math.min(...arr))
//     }
//     return returnedArr
// }
// console.log(arrOfMins(matrix))


// 3.

// let matrixWithWords = [["Hi",6],["apple",23],[11,"Fernando"]]

// function wordInMatrix(mat, word){
//     let result = false
//     for(arr of mat){
//         if(arr.includes(word)) result = true
//     }
//     return result
// }

// console.log(wordInMatrix(matrixWithWords, "Fernand"))

// 4.

// let matrix = [[2,3],[4,6]]
// function reversedMatrix(mat){
//     let returnedMatrix = mat
//     for(i = 0; i < mat.length; i++){
//        for(j = 0; j < mat[i].length; j++){
//         returnedMatrix[i][j] = mat[j][i]
//        }
//     }
//     return returnedMatrix
// }
// console.log(reversedMatrix(matrix))

// 5.

// ????????????

// 6. 

let matrix = [[[1,1,1],[1,1,1],[1,1,1]], [[1,1],[1,1]], [[1,0,0],[1,0,0],[1,0,0]], [[1,0,0],[1,0,0],[1,0,0]]]
function onlyOne(mat){
    let rememberLength = 0
    let result = 0
    for(arr of mat){
        for(arr1 of arr){
            let lowest = 1
            for(arr2 of arr1){
                if(arr2 < lowest) lowest = arr2
            }
            if(lowest === 0) continue
            else if(rememberLength < arr.length) rememberLength = arr.length
        }
    }
    return rememberLength
}
console.log(onlyOne(matrix))


