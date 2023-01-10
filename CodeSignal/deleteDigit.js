function solution(n) {
  const options = [];
  const s = n.toString();
  for (let i = 0; i < s.length; i++) {
    const change = s.replace(s[i], '');
    options.push(parseInt(change));
  }

  const output = Math.max(...options);
  return output;
}

solution(152);
