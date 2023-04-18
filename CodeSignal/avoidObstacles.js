export default function avoidObstacles(inputArray) {

  var jump = 1; // 1 * 1 = 0(1)
  var valid = true; // 1 * 1 = 0(1)

  while (true) { // 2 * n = 0(2n)
    valid = true; // 1 * n = 0(n)
    for (var i = 0; // 1 * n = 0(n)
      i < inputArray.length; // 2 * n * n = 0(2n^2) ~= 0(n^2)
      i++) { // 2 * n * n = 0(2n^2) ~= 0(n^2)
      if (inputArray[i] % jump === 0) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
        valid = false; //  1 * n * n = 0(n^2)
      }
    }
    if (valid === true) { // 2 * n = 0(2n) ~= 0(n)
      return jump; // 1 * 1 = 0(1)
    }
    jump++; // 2 * n = 0(2n) ~= 0(n)
  }
}

// Big O Notation: 0(n^2) quadratic time
