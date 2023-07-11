export default function firstDigit(inputString) {
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < inputString.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (!isNaN(parseInt(inputString[i]))) { // 4 * n = 0(4n) ~= 0(n)
      return inputString[i]; // 2 * 1 = 0(2) ~= 0(1)
    }
  }
  return null;
}

// Big O Notation: 0(n) linear time
