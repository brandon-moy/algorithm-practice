function solution(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let diff = 0;
    if (inputArray[i] < inputArray[i + 1]) {
      diff = inputArray[i + 1] - inputArray[i];
    } else {
      diff = inputArray[i] - inputArray[i + 1];
    }
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}

solution([0, 0]);
