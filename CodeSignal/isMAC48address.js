function solution(inputString) {
  if (inputString.length !== 17) return false;
  const split = inputString.split('-');
  if (split.length !== 6) return false;
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const lett = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < split.length; i++) {
    if (!num.includes(split[i][0]) && !lett.includes(split[i][0])) return false;
    if (!num.includes(split[i][1]) && !lett.includes(split[i][1])) return false;
  }
  return true;
}

solution('FF-FF-FF-FF-FF-FF');
