function solution(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let days = 0;
  while (currentHeight < desiredHeight) {
    days++;
    currentHeight += upSpeed;
    if (currentHeight >= desiredHeight) {
      return days;
    }
    currentHeight -= downSpeed;

  }
}

solution(100, 10, 900);
