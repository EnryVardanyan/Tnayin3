let matrix = [[2,3],[4,6]]
function reversedMatrix(mat){
    let returnedMatrix = mat
    for(i = 0; i < mat.length; i++){
       for(j = 0; j < mat[i].length; j++){
        returnedMatrix[i][j] = mat[j][i]
       }
    }
    return returnedMatrix
}
console.log(reversedMatrix(matrix))
