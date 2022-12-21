function solution(inputString) {
  const arrStr = inputString.split('').sort(); // 3 * 1 = 0(3) ~= 0(1)
  let count = 0; // 1 * 1 = 0(1)
  let i = 0; // 1 * 1 = 0(1)
  while (i < arrStr.length) { // 2 * n = 0(2n) ~= 0(n)
    if (arrStr[i] === arrStr[i + 1]) { // 3 * n = 0(3n) ~= 0(n)
      count++; // 2 * n = 0(2n) ~= 0(n)
      i += 2; // 2 * n = 0(2n) ~= 0(n)
    } else i++; // 2 * n = 0(2n) ~= 0(n)
  }
  return count === Math.floor(arrStr.length / 2); // 5 * 1 = 0(5) ~= 0(1)
}

// Big O Notation: 0(n) linear time

solution('aabb');
