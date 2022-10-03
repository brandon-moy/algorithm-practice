// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

function solution(n) {
  if (n <= 1) {
    return 1;
  }
  var area = (n * n) + (n - 1) * (n - 1);
  return area;
}

solution(4);
