// Write a function that returns the sum of two numbers.

export default function add(param1, param2) {
  if (typeof param1 !== 'number' || typeof param2 !== 'number') return null;
  var sum = param1 + param2; // 2 * 1 = 0(1)
  return sum; // 1 * 1 = 0(1)
}

// Big O Notation for add: 0(1) constant time

add(1, 2);
