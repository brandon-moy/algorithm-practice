export default function differentSymbolsNaive(s) {
  let count = 1; // 1 * 1 = 0(1)
  const characters = [s[0]]; // 2 * 1 = 0(2) ~= 0(1)
  for (
    let i = 0; // ! * 1 = 0(1)
    i < s.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (!characters.includes(s[i])) { // 4 * n = 0(4n) ~= 0(n)
      count++; // 2 * n = 0(2n) ~= 0(n)
      characters.push(s[i]); // 3 * n = 0(3n) ~= 0(n)
    }
  }
  return count; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time
