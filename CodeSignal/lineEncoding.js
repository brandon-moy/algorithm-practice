function solution(s) {
  let count = 1;
  let output = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        output += count + s[i];
      } else {
        output += s[i];
      }
      count = 1;
    }
  }
  return output;
}

solution('aabbccc');
