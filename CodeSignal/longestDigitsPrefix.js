function solution(inputString) {
  let output = '';

  for (let i = 0; i < inputString.length; i++) {
    const current = inputString[i];

    if (!isNaN(current) && current !== ' ') {
      output += current;
    } else {
      break;
    }
  }
  return output;
}

solution('123a1');
