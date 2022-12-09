function solution(inputArray, k) {
  var count = 1;
  for (var i = 0; i < inputArray.length;) {
    if ((i + count) % k === 0) {
      inputArray.splice(i, 1);
      count++;
    } else {
      i++;
    }
  }
  return inputArray;
}

solution([1, 2, 3, 4], 4);
