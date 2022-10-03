// Given the string, check if it is a palindrome.

function solution(inputString) {
  var inputNoSpace = '';
  var reverseNoSpace = '';
  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      inputNoSpace += inputString[i];
      reverseNoSpace = inputString[i] + reverseNoSpace;
    }
  }
  if (inputNoSpace === reverseNoSpace) {
    return true;
  }
  return false;
}

solution('bob');
