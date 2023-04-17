export default function areSimilar(a, b) {
  if (!a.length || !b.length || typeof a !== 'object' || typeof b !== 'object') return null;
  const diff = []; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < a.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n)
    if (a[i] !== b[i]) { // 3 * n = 0(3n) ~= 0(n)
      diff.push(i); // ? * n = 0(?n) ~= 0(n)
    }
  }

  if (diff.length === 0) { // 2 * 1 = 0(2) ~= 0(1)
    return true; // 1 * 1 = 0(1)
  }

  if (diff.length === 2) { // 2 * 1 = 0(2) ~= 0(1)
    if (a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) { // 7 * 1 = 0(7) ~= 0(1)
      return true; // 1 * 1 = 0(1)
    }
  }
  return false; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

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
