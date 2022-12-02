function solution(deposit, rate, threshold) {
  let growth = deposit;
  const realRate = 1 + (rate / 100);
  let years = 0;
  while (growth < threshold) {
    growth = growth * realRate;
    years++;
  }
  return years;
}

solution(100, 20, 170);
