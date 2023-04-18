export default function minesweeper(matrix) {
  const output = []; // 1 * 1 = 0(1)

  for (
    let i = 0; // 1 * 1 = 0(1)
    i < matrix.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    output.push([]); // 2 * n = 0(2n) ~= 0(n)
    for (
      let j = 0; // 1 * n = 0(n)
      j < matrix[i].length; // 3 * n * n = 0(3n^2) ~= 0(n^2)
      j++) { // 2 * n * n = 0(2n^2) ~= 0(n^2)
      let count = 0; // 1 * n * n = 0(n^2)
      if (i > 0) { // 1 * n * n = 0(n^2)
        if (matrix[i - 1][j]) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
          count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
        }
        if (matrix[i - 1][j + 1]) { // 4 * n * n = 0(4n^2) ~= 0(n^2)
          count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
        }
        if (matrix[i - 1][j - 1]) { // 4 * n * n = 0(4n^2) ~= 0(n^2)
          count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
        }
      }
      if (i < matrix.length - 1) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
        if (matrix[i + 1][j]) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
          count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
        }
        if (matrix[i + 1][j + 1]) { // 4 * n * n = 0(4n^2) ~= 0(n^2)
          count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
        }
        if (matrix[i + 1][j - 1]) { // 4 * n * n = 0(4n^2) ~= 0(n^2)
          count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
        }
      }
      if (matrix[i][j + 1]) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
        count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
      }
      if (matrix[i][j - 1]) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
        count += 1; // 3 * n * n = 0(3n^2) ~= 0(n^2)
      }
      output[i].push(count); // 4 * n * n = 0(4n^2) ~= 0(n^2)
    }
  }
  return output; // 1 * 1 = 0(1)
}
