// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

export default function adjacentElementsProduct(inputArray) {
  if (!inputArray.length) return null;
  var output = inputArray[0] * inputArray[1]; // 4 * 1 = 0(4) ~= 0(1)
  for (
    var i = 1; // 1 * 1 = 0(1)
    i < inputArray.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    var currentProduct = 0; // 1 * n = 0(n)
    if (inputArray[i + 1] !== undefined) { // 3 * n = 0(2n) ~= 0(n)
      currentProduct = inputArray[i] * inputArray[i + 1]; // 4 * n = 0(4n) ~= 0(n)
    } else {
      break; // 1 * n = 0(n)
    }
    if (currentProduct > output) { // 1 * n = 0(n)
      output = currentProduct; // 1 * n = 0(n)
    }
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time
