function solution(inputArray) {

  var jump = 1;
  var valid = true;

  while (true) {
    valid = true;
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % jump === 0) {
        valid = false;
      }
    }
    if (valid === true) {
      return jump;
    }
    jump++;
  }
}

solution([0, 0]);
