// Given the string, check if it is a palindrome.

function solution(inputString) {
  var inputNoSpace = ''; // 1 * 1 = 0(1)
  var reverseNoSpace = ''; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < inputString.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (inputString[i] !== ' ') { // 3 * n = 0(3n) ~= 0(n)
      inputNoSpace += inputString[i]; // 3 * n = 0(3n) ~= 0(n)
      reverseNoSpace = inputString[i] + reverseNoSpace; // 3 * n = 0(3n) ~= 0(n)
    }
  }
  if (inputNoSpace === reverseNoSpace) { // 3 * 1 = 0(3) ~= 0(1)
    return true; // 1 *  1 = 0(1)
  }
  return false; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution('bob');
