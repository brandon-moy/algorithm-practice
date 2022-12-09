function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(parseInt(inputString[i]))) {
      return inputString[i];
    }
  }
}

solution('q2qq');
