function solution(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0; // 1 * 1 = 0(1)
  let days = 0; // 1 * 1 = 0(1)
  while (currentHeight < desiredHeight) { // 2 * n = 0(2n) ~= 0(n)
    days++; // 2 * n = 0(2n) ~- 0(n)
    currentHeight += upSpeed; // 3 * n = 0(3n) ~= 0(n)
    if (currentHeight >= desiredHeight) { // 3 * n = 0(3n) ~= 0(n)
      return days; // 1 * 1 = 0(1)
    }
    currentHeight -= downSpeed; // 3 * n = 0(3n) ~= 0(n)

  }
}

// Big O Notation: 0(n) linear time

solution(100, 10, 900);
