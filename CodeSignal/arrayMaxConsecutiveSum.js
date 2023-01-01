function solution(inputArray, k) {
  let result = 0; // 1 * 1 = 0(1)
  let currentSum = 0; // 1 * 1 = 0(1)
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < k - 1; // 2 * n = 0(2n) ~- 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    currentSum += inputArray[i]; // 3 * n = 0(3n) ~= 0(n)
  }
  for (
    let i = k - 1; // 2 * 1 = 0(2) ~= 0(1)
    i < inputArray.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    currentSum += inputArray[i]; // 3 * n = 0(3n) ~= 0(n)
    if (currentSum > result) { // 3 * n = 0(3n) ~= 0(n)
      result = currentSum; // 2 * n = 0(2n) ~= 0(n)
    }
    currentSum -= inputArray[i - k + 1]; // 5 * n = 0(5n) ~= 0(n)
  }
  return result; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution([1, 2, 3, 4], 2);
