export default function depositProfit(deposit, rate, threshold) {
  let growth = deposit; // 2 * 1 = 0(3) ~= 0(1)
  const realRate = 1 + (rate / 100); // 4 * 1 = 0(4) ~= 0(1)
  let years = 0; // 1 * 1 = 0(1)
  while (growth < threshold) { // 3 * n = 0(3n) ~= 0(n)
    growth = growth * realRate; // 4 * n = 0(4n) ~= 0(n)
    years++; // 2 * n = 0(2n) ~= 0(n)
  }
  return years; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time
