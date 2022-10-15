function solution(a, b) {
  const diff = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff.push(i);
    }
  }

  if (diff.length === 0) {
    return true;
  }

  if (diff.length === 2) {
    if (a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) {
      return true;
    }
  }
  return false;
}

solution([1, 2, 3], [1, 2, 3]);

// take two arrays
// sort them
// compare to each other

// account for swapping one pair
// create a variable to count swaps
// if numbers were right and positions were wrong incremenet the swap counter
// check the number of matches or the number of swap counter to determine true or false

// tests that are failing:
// cases with one swap but are counting as more than one swap

// create an array for positions
// push position if not equal
// check legnth of array if === 2
// check if numbers at array numbers are equal to the other number position
