function solution(n) {
  const string = n.toString();
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i]) % 2) {
      return false;
    }
  }
  return true;
}

solution(62236);
