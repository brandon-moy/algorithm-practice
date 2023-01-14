function solution(n) {
  const options = []; // 1 * 1 = 0(1)
  const s = n.toString(); // 3 * 1 = 0(3) ~= 0(1)
  for (let i = 0; // 1 * 1 = 0(1)
    i < s.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    const change = s.replace(s[i], ''); // ? * n = 0(?n) ~= 0(n)
    options.push(parseInt(change)); //  ? * n = 0(?n) ~= 0(n)
  }

  const output = Math.max(...options); // 3 * 1 = 0(3) ~= 0(1)
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution(152);
