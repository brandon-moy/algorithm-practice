function solution(inputArray) {
  var output = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      while (inputArray[i] >= inputArray[i + 1]) {
        inputArray[i + 1]++;
        output++;
      }
    }
  }
  return output;
}

// create an output for solution
// loop through the array
// if first numberi s less than position in front of it, incremenet by 1
// while the nubmeri s < number in front of it continue to increment by 1
// each time it is incremeneted add 1 to output
// return output

solution([1, 1, 1]);
