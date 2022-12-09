function solution(inputArray, k) {
  let result = 0;
  let currentSum = 0;
  for (let i = 0; i < k - 1; i++) {
    currentSum += inputArray[i];
  }
  for (let i = k - 1; i < inputArray.length; i++) {
    currentSum += inputArray[i];
    if (currentSum > result) {
      result = currentSum;
    }
    currentSum -= inputArray[i - k + 1];
  }
  return result;
}

solution([1, 2, 3, 4], 2);
