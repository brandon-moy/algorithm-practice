function solution(inputString) {
  if (inputString.length !== 17) { // 3 * 1 = 0(3) ~= 0(1)
    return false; // 1 * 1 = 0(1)
  }
  const split = inputString.split('-'); // 3 * 1 = 0(3) ~= 0(1)
  if (split.length !== 6) { // 3 * 1 = 0(3) ~= 0(1)
    return false; // 1 * 1 = 0(1)
  }
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // 1 * 1 = 0(1)
  const lett = ['A', 'B', 'C', 'D', 'E', 'F']; // 1 * 1 = 0(1)
  for (let i = 0; // 1 * 1 = 0(1)
    i < split.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (!num.includes(split[i][0]) && !lett.includes(split[i][0])) { // ? * n = 0(?n) ~= 0(n)
      return false; // 1 * 1 = 0(1)
    }
    if (!num.includes(split[i][1]) && !lett.includes(split[i][1])) return false; // ? * n = 0(?n) ~= 0(n)
  }
  return true; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution('FF-FF-FF-FF-FF-FF');
