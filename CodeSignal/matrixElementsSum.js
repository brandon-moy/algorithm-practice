function solution(matrix) {
  var output = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (matrix[i + 1] !== undefined) {
          matrix[i + 1].splice(j, 1, 0);
        }
      } else {
        output += matrix[i][j];
      }
    }
  }
  return output;
}

solution([[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]]);
