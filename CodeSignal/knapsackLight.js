function solution(value1, weight1, value2, weight2, maxW) {
  if (weight1 > maxW && weight2 > maxW) { // 6 * 1 = 0(6) ~= 0(1)
    return 0; // 1 * 1 = 0(1)
  } else if ((weight1 + weight2) <= maxW) { // 5 * 1 = 0(5) ~= 0(1)
    return value1 + value2; // 3 * 1 = 0(3) ~= 0(1)
  } else {
    if (weight1 <= maxW) { // 3 * 1 = 0(3) ~= 0(1)
      var max = value1; // 2 * 1 = 0(2) ~= 0(1)
    }
    if (weight2 <= maxW && value2 > value1) { // 6 * 1 = 0(6) ~= 0(1)
      max = value2; // 2 * 1 = 0(2) ~= 0(1)
    }
    return max; // 1 * 1 = 0(1)
  }
}

// Big O Notation: 0(1) constant time

solution(15, 2, 20, 3, 2);
