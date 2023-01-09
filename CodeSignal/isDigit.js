function solution(symbol) {
  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (!digit.includes(symbol)) return false;
  return true;
}

solution('1');
