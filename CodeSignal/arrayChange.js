function solution(inputArray) {
  var output = 0; // 1 * 1 = 0(1)
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < inputArray.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (inputArray[i] >= inputArray[i + 1]) { // 3 * n = 0(3n) ~= 0(n)
      while (inputArray[i] >= inputArray[i + 1]) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
        inputArray[i + 1]++; // 3 * n * n = 0(3n^2) ~= 0(n^2)
        output++; // 2 * n * n = 0(2n^2) ~= 0(n^2)
      }
    }
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n^2) quadratic time

// create an output for solution
// loop through the array
// if first numberi s less than position in front of it, incremenet by 1
// while the nubmeri s < number in front of it continue to increment by 1
// each time it is incremeneted add 1 to output
// return output

solution([1, 1, 1]);
