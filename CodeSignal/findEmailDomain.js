function solution(address) {
  const split = address.split('@'); // 4 * 1 = 0(4) ~= 0(1)
  if (split.length === 2) { // 2 * 1 = 0(2) ~= 0(1)
    return split[1]; // 1 * 1 = 0(1)
  }
  return split[2]; // 1 * 1 = 0(1)
}

// Big O Notation: 0(1) constant time

solution('brandon@brandonmoy.com');
