function solution(n) {
  var string = n.toString();
  var array = string.split('');
  var halfway = Math.floor(array.length / 2);
  var first = array.slice(0, halfway);
  var second = array.slice(halfway);
  var firstSum = 0;
  var secondSum = 0;
  for (var i = 0; i < first.length; i++) {
    firstSum += first[i];
  }
  for (var j = 0; j < second.length; j++) {
    secondSum += second[j];
  }
  if (firstSum !== secondSum) return false;

  return true;
}

// takes a number
// turn number into string
// turn string into array
// cut array into two halves
// sum the halves
// check if the halves are equal
// if yes, return true
// otherwise return false

solution(10000);
