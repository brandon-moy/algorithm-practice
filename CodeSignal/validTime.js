function solution(time) {
  const split = time.split(':'); // 2 * 1 = 0(2) ~= 0(1)
  const hours = parseInt(split[0]); // 3 * 1 = 0(3) ~= 0(1)
  const min = parseInt(split[1]); // 3 * 1 = 0(3) ~= 0(1)
  if (hours > 23) { // 2 * 1 = 0(2) ~= 0(1)
    return false; // 1 * 1 = 0(1)
  }
  if (min > 59) { // 2 * 1 = 0(2) ~= 0(1)
    return false; // 1 * 1 = 0(1)
  }
  return true; // 1 * 1 = 0(1)
}

// Big O Notation: 0(1) constant time

solution('23:51');
