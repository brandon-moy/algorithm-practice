function solution(matrix) {
  const output = [];

  for (let i = 0; i < matrix.length; i++) {
    output.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      if (i > 0) {
        if (matrix[i - 1][j]) {
          count += 1;
        }
        if (matrix[i - 1][j + 1]) {
          count += 1;
        }
        if (matrix[i - 1][j - 1]) {
          count += 1;
        }
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) {
          count += 1;
        }
        if (matrix[i + 1][j + 1]) {
          count += 1;
        }
        if (matrix[i + 1][j - 1]) {
          count += 1;
        }
      }
      if (matrix[i][j + 1]) {
        count += 1;
      }
      if (matrix[i][j - 1]) {
        count += 1;
      }
      output[i].push(count);
    }
  }
  return output;
}

solution([[true, false, false], [false, true, false], [false, false, false]]);
