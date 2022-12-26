function solution(inputArray, k) {
  var count = 1; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < inputArray.length;) { // 2 * n = 0(2n) ~= 0(n)
    if ((i + count) % k === 0) { // 3 * n = 0(3n) ~= 0(n)
      inputArray.splice(i, 1); // 3 * n = 0(3n) ~= 0(n)
      count++; // 2 * n = 0(2n) ~= 0(n)
    } else {
      i++; // 2 * n = 0(2n) ~= 0(n)
    }
  }
  return inputArray; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution([1, 2, 3, 4], 4);
