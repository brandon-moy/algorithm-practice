export default function allLongestString(inputArray) {
  var output = []; // 1 * 1 = 0(1)
  var longer = 0; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < inputArray.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (typeof inputArray[i] !== 'string') return null;
    if (inputArray[i].length > longer) { // 3 * n = 0(3n) ~= 0(n)
      longer = inputArray[i].length; // 3 * n = 0(3n) ~= 0(n)
    }
  }
  for (
    var j = 0; // 1 * 1 = 0(1)
    j < inputArray.length; // 2 * n = 0(2n) ~= 0(n)
    j++) { // 2 * n = 0(2n) ~= 0(n)
    if (inputArray[j].length === longer) { // 3 * n = 0(3n) ~= 0(n)
      output.push(inputArray[j]); // 3 * n = 0(3n) ~= 0(n)
    }
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time
