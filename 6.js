function biggestInner(matrix) {
  let maxLength = 0;
  const newMatrix = new Array(matrix.length).fill(0).map(() => new Array(matrix.length).fill(0));
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          newMatrix[i][j] = 1;
        } else {
          newMatrix[i][j] = Math.min(newMatrix[i - 1][j], newMatrix[i][j - 1], newMatrix[i - 1][j - 1]) + 1;
        }
        if (newMatrix[i][j] > maxLength) {
          maxLength = newMatrix[i][j];
        }
      }
    }
  }
  return maxLength;
}

console.log(biggestInner(
   [[0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]]));