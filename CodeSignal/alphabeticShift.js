function solution(inputString) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // 1 * 1 = 0(1)
  let output = ''; // 1 * 1 = 0(1)
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < inputString.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    let position = alphabet.indexOf(inputString[i]) + 1; // 4 * n = 0(4n) ~= 0(n)
    if (position === 26) { // 2 * n = 0(2n) ~= 0(n)
      position = 0; // 1 * 1 = 0(1)
    }
    output += alphabet[position]; // 3 * n = 0(3n) ~= 0(n)
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution('crazy');
