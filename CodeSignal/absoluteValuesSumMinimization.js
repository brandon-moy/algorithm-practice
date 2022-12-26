function solution(a) {
  let currentOutput = a[0]; // 2 * 1 = 0(2) ~= 0(1)
  let leastSum = absoluteValueSumForIndex(a, 0); // ? * 1 = 0(?) ~= 0(1)
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < a.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    const sum = absoluteValueSumForIndex(a, i); // ? * n = 0(?n) ~= 0(N)
    if (leastSum > sum) { // 3 * n = 0(3n) ~= 0(n)
      leastSum = sum; // 2 * n = 0(2n) ~= 0(n)
      currentOutput = a[i]; // 2 * n = 0(2n) ~= 0(n)
    }
  }
  return currentOutput; // 1 * 1 = 0(1)
}

function absoluteValueSumForIndex(array, index) {
  let sum = 0; // 1 * 1 = 0(1)
  array.forEach(val => { // 1 * 1 = 0(1)
    sum += Math.abs(val - array[index]); // 5 * n = 0(5n) ~= 0(n)
  });
  return sum; // 1 * 1 = 0(1)
}

// Big O Notation: solution 0(n) linear time
// Big O Notation: absoluteValueSumForIndex 0(n) linear time

solution([1]);
