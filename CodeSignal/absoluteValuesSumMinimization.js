function solution(a) {
  let currentOutput = a[0];
  let leastSum = absoluteValueSumForIndex(a, 0);
  for (let i = 0; i < a.length; i++) {
    const sum = absoluteValueSumForIndex(a, i);
    if (leastSum > sum) {
      leastSum = sum;
      currentOutput = a[i];
    }
  }
  return currentOutput;
}

function absoluteValueSumForIndex(array, index) {
  let sum = 0;
  array.forEach(val => {
    sum += Math.abs(val - array[index]);
  });
  return sum;
}

solution([1]);
