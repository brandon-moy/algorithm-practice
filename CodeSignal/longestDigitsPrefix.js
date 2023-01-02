function solution(inputString) {
  let output = ''; // 1 * 1 - 0(1)

  for (
    let i = 0; // 1 * 1 = 0(1)
    i < inputString.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    const current = inputString[i]; // 3 * n = 0(3n) ~= 0(n)

    if (!isNaN(current) && current !== ' ') { // 5 * n = 0(5n) ~= 0(n)
      output += current; // 3 * n = 0(3n) ~= 0(n)
    } else {
      break; // 1 * 1 = 0(1)
    }
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution('123a1');
