function solution(a) {
  var index = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      index.push(i);
    }
  }
  var filtered = a.filter(num => num !== -1);
  var output = filtered.sort(function (a, b) {
    if (a !== -1) return a - b;
  });
  for (var j = 0; j < index.length; j++) {
    output.splice(index[j], 0, -1);
  }
  return output;
}

solution([-1, 150, 190, 170, -1, -1, 160, 180]);
