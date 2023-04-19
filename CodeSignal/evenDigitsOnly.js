export default function evenDigitsOnly(n) {
  if (!n && n !== 0) return null;
  const string = n.toString(); // 3 * 1 = 0(3) ~= 0(1)
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < string.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (parseInt(string[i]) % 2) { // 3 * n = 0(3n) ~= 0(n)
      return false; // 1 * 1 = 0(1)
    }
  }
  return true; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time
