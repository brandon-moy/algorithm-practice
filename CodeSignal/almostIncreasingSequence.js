export default function almostIncreasingSequence(sequence) {
  let count = 0; // 1 * 1 = 0(1)

  for (
    let i = 1; // 1 * 1 = 0(1)
    i < sequence.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (sequence[i] <= sequence[i - 1]) { // 4 * n = 0(4n) ~= 0(n)
      count++; // 2 * n = 0(2n) ~= 0(n)
      if (count > 1) { // 2 * n = 0(2n) ~= 0(n)
        return false; // 1 * 1 = 0(1)
      }
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) { // 6 * n = 0(6n) ~= 0(n)
        return false; // 1 * 1 = 0(1)
      }
    }
  }

  return true; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time
