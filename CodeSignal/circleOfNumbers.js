function solution(n, firstNumber) {
  const half = n / 2; // 3 * 1 = 0(3) ~= 0(1)
  let across = firstNumber + half; // 4 * 1 = 0(4) ~= 0(1)
  if (across > n) { // 3 * 1 = 0(3) ~= 0(1)
    across = firstNumber - half; // 4 * 1 = 0(4) ~= 0(1)
  } else if (across === n) { // 3 * 1 = 0(3) ~= 0(1)
    across = 0; // 1 * 1 = 0(1)
  }
  return across; // 1 * 1 = 0(1)
}

// Big O Notation: 0(1) constant time

solution(10, 2);
