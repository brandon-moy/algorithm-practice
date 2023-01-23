function solution(s) {
  let sum = 0; // 1 * 1 = 0(1)
  let tmp = ''; // 1 * 1 = 0(1)
  for (let i = 0; // 1 * 1 = 0(1)
    i < s.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (isDigit(s[i])) { // ? * n = 0(?n) ~= 0(n)
      tmp += s[i]; // 3 * n = 0(3n) ~= 0(n)
    } else {
      if (tmp) sum += parseInt(tmp); // 4 * n = 0(4n) ~= 0(n)
      tmp = ''; // 1 * 1 = 0(1)
    }
  }

  if (tmp) sum += parseInt(tmp); // 4 * n = 0(4n) ~= 0(n)
  return sum; // 1 * 1 = 0(1)
}

function isDigit(c) {
  return c >= '0' && c <= '9';
}

// Big O Notation: 0(n) linear time

solution('2 apples 2 oranges');
