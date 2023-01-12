function solution(symbol) {
  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // 1 * 1 = 0(1)
  if (!digit.includes(symbol)) { // 4 * 1 = 0(4) ~= 0(1)
    return false; // 1 * 1 = 0(1)
  }
  return true; // 1 * 1 = 0(1)
}

// Big O Notation: 0(1) constant time

solution('1');
