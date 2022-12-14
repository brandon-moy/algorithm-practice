function solution(n) {
  var string = n.toString(); // 2 * 1 = 0(2) ~= 0(1)
  var array = string.split(''); // 2 * 1 = 0(2) ~= 0(1)
  var halfway = Math.floor(array.length / 2); // 4 * 1 = 0(4) ~= 0(1)
  var first = array.slice(0, halfway); // 3 * 1 = 0(3) ~= 0(1)
  var second = array.slice(halfway); // 2 * 1 = 0(2) ~= 0(1)
  var firstSum = 0; // 1 * 1 = 0(1)
  var secondSum = 0; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < first.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    firstSum += first[i]; // 3 * n = 0(3n) ~= 0(n)
  }
  for (
    var j = 0; // 1 * 1 = 0(1)
    j < second.length; // 2 * n = 0(2n) ~= 0(n)
    j++) { // 2 * n = 0(2n) ~= 0(n)
    secondSum += second[j]; // 3 * n = 0(3n) ~= 0(n)
  }
  if (firstSum !== secondSum) { // 3 * 1 = 0(3) ~= 0(1)
    return false; // 1 * 1 = 0(1)
  }
  return true; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

// takes a number
// turn number into string
// turn string into array
// cut array into two halves
// sum the halves
// check if the halves are equal
// if yes, return true
// otherwise return false

solution(10000);
