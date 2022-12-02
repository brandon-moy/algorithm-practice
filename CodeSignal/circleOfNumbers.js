function solution(n, firstNumber) {
  const half = n / 2;
  let across = firstNumber + half;
  if (across > n) {
    across = firstNumber - half;
  } else if (across === n) {
    across = 0;
  }
  return across;
}

solution(10, 2);
