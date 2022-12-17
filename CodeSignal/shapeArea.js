// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

function solution(n) {
  if (n <= 1) { // 1 * 1 = 0(1)
    return 1; // 1 * 1 = 0(1)
  }
  var area = (n * n) + (n - 1) * (n - 1); // 6 * 1 = 0(1)
  return area; // 1 * 1 = 0(1)
}

// Big O Notation 0(1) constant time

solution(4);
