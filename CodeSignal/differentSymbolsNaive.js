function solution(s) {
  let count = 1;
  const characters = [s[0]];
  for (let i = 0; i < s.length; i++) {
    if (!characters.includes(s[i])) {
      count++;
      characters.push(s[i]);
    }
  }
  return count;
}

solution('cabac');
