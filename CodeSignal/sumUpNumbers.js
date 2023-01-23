function solution(s) {
  let sum = 0;
  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      tmp += s[i];
    } else {
      if (tmp) sum += parseInt(tmp);
      tmp = '';
    }
  }

  if (tmp) sum += parseInt(tmp);
  return sum;
}

function isDigit(c) {
  return c >= '0' && c <= '9';
}

solution('2 apples 2 oranges');
