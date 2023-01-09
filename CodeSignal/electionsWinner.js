function solution(votes, k) {
  const max = Math.max(...votes);
  let chance = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] + k > max) {
      chance++;
    }
  }
  if (!chance) {
    let check = 0;
    for (let j = 0; j < votes.length; j++) {
      if (votes[j] === max) {
        check++;
      }
    }
    if (check !== 1) {
      return 0;
    } else if (check === 1) {
      return 1;
    }
  }
  return chance;
}

solution([1, 1, 3, 3, 1, 1], 0);
