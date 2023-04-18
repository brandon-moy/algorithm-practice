export default function arrayMaximalAdjacentDifference(inputArray) {
  if (!inputArray.length) return null;
  let maxDiff = 0; // 1 * 1 = 0(1)
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < inputArray.length - 1; // 3 * n = 0(3n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (typeof inputArray[i] !== 'number' || isNaN(inputArray[i])) return null;
    let diff = 0; // 1 * n = 0(n)
    if (inputArray[i] < inputArray[i + 1]) { // 4 * n = 0(4n) ~= 0(n)
      diff = inputArray[i + 1] - inputArray[i]; // 3 * n = 0(3n) ~= 0(n)
    } else {
      diff = inputArray[i] - inputArray[i + 1]; // 3 * n = 0(3n) ~= 0(n)
    }
    if (diff > maxDiff) { // 1 * n = 0(n)
      maxDiff = diff; // 1 * n = 0(n)
    }
  }
  return maxDiff; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time
