function solution(n) {
  let result = 0; // 1 * 1 - 0(1)
  while (n > 9) { // 2 * n = 0(2n) ~= 0(n)
    n = n.toString().split('').reduce((total, value) => Number(total) + Number(value)); // ? * n = 0(?n) ~= 0(n)
    result++; // 2 * n = 0(2n) ~- 0(n)
  }
  return result; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution(5);
