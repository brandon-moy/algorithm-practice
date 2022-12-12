function solution(n) {
  let result = 0;
  while (n > 9) {
    n = n.toString().split('').reduce((total, value) => Number(total) + Number(value));
    result++;
  }
  return result;
}

solution(5);
