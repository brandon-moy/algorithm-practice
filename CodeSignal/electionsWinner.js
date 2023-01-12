function solution(votes, k) {
  const max = Math.max(...votes); // 3 * 1 = 0(3) ~= 0(1)
  let chance = 0; // 1 * 1 = 0(1)
  for (let i = 0; // 1 * 1 = 0(1)
    i < votes.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (votes[i] + k > max) { // 4 * n = 0(4n) ~= 0(n)
      chance++; // 2 * n = 0(2n) ~= 0(n)
    }
  }
  if (!chance) { // 2 * 1 = 0(2) ~= 0(1)
    let check = 0; // 1 * 1 = 0(1)
    for (let j = 0; // 1 * 1 = 0(1)
      j < votes.length; // 2 * n = 0(2n) ~= 0(n)
      j++) { // 2 * n = 0(2n) ~= 0(n)
      if (votes[j] === max) { // 3 * n = 0(3n) ~= 0(n)
        check++; // 2 * n = 0(2n) ~= 0(n)
      }
    }
    if (check !== 1) { // 2 * 1 = 0(2) ~= 0(1)
      return 0; // 1 * 1 = 0(1)
    } else if (check === 1) { // 2 * 1 = 0(2) ~= 0(1)
      return 1; // 1 * 1 = 0(1)
    }
  }
  return chance; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution([1, 1, 3, 3, 1, 1], 0);
