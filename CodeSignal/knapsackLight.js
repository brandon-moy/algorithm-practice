function solution(value1, weight1, value2, weight2, maxW) {
  if (weight1 > maxW && weight2 > maxW) {
    return 0;
  } else if ((weight1 + weight2) <= maxW) {
    return value1 + value2;
  } else {
    if (weight1 <= maxW) {
      var max = value1;
    }
    if (weight2 <= maxW && value2 > value1) {
      max = value2;
    }
    return max;
  }
}

solution(15, 2, 20, 3, 2);
