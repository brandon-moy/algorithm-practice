// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
  var output = inputArray[0] * inputArray[1];
  for (var i = 1; i < inputArray.length; i++) {
    var currentProduct = 0;
    if (inputArray[i + 1] !== undefined) {
      currentProduct = inputArray[i] * inputArray[i + 1];
    } else {
      break;
    }
    if (currentProduct > output) {
      output = currentProduct;
    }
  }
  return output;
}

solution([1, 2, 3]);
