let matrixWithWords = [["Hi",6],["apple",23],[11,"Fernando"]]

function wordInMatrix(mat, word){
    let result = false
    for(arr of mat){
        if(arr.includes(word)) result = true
    }
    return result
}

console.log(wordInMatrix(matrixWithWords, "Fernand"))