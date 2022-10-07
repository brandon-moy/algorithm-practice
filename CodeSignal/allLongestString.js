function solution(inputArray) {
  var output = [];
  var longer = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longer) {
      longer = inputArray[i].length;
    }
  }
  for (var j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longer) {
      output.push(inputArray[j]);
    }
  }
  return output;
}

solution(['one', 'two', 'three']);
