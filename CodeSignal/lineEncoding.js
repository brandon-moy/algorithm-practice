function solution(s) {
  let count = 1; // 1 * 1 = 0(1)
  let output = ''; // 1 * 1 = 0(1)

  for (
    let i = 0; // 1 * 1 = 0(1)
    i < s.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (s[i] === s[i + 1]) { // 4 * n = 0(4n) ~= 0(n)
      count++; // 2 * n = 0(2n) ~= 0(n)
    } else {
      if (count > 1) { // 2 * n = 0(2n) ~= 0(n)
        output += count + s[i]; // 5 * n = 0(5n) ~= 0(n)
      } else {
        output += s[i]; // 3 * n = 0(3n) ~= 0(n)
      }
      count = 1; // 1 * 1 = 0(1)
    }
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution('aabbccc');
