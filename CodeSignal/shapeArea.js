// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

export default function shapeArea(n) {
  if (typeof n !== 'number') return null;
  if (n <= 1) { // 1 * 1 = 0(1)
    return 1; // 1 * 1 = 0(1)
  }
  var area = (n * n) + (n - 1) * (n - 1); // 6 * 1 = 0(1)
  return area; // 1 * 1 = 0(1)
}

// Big O Notation 0(1) constant time
