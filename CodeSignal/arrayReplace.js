function solution(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray.splice(i, 1, substitutionElem);
    }
  }
  return inputArray;
}

solution([1, 2, 3], 1, 3);
