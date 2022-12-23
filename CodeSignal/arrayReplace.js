function solution(inputArray, elemToReplace, substitutionElem) {
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < inputArray.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (inputArray[i] === elemToReplace) { // 3 * n = 0(3n) ~= 0(n)
      inputArray.splice(i, 1, substitutionElem); // ? * n = 0(?n) ~= 0(n)
    }
  }
  return inputArray; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution([1, 2, 3], 1, 3);
