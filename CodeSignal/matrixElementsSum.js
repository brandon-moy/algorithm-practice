function solution(matrix) {
  var output = 0; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < matrix.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    for (
      var j = 0; // 1 * 1 * n = 0(n)
      j < matrix[i].length; // 3 * n * n = 0(3n^2) ~= 0(n^2)
      j++) { // 2 * n * n = 0(2n^2) ~= 0(n^2)
      if (matrix[i][j] === 0) { // 2 * n * n = 0(2n^2) ~= 0(n^2)
        if (matrix[i + 1] !== undefined) { // 2 * n * n = 0(2n^2) ~= 0(n^2)
          matrix[i + 1].splice(j, 1, 0); // 4 * n * n = 0(4n^2) ~= 0(n^2)
        }
      } else {
        output += matrix[i][j]; // 3 * n * n = 0(3n^2) ~= 0(n^2)
      }
    }
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n^2) quadratic time

solution([[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]]);
