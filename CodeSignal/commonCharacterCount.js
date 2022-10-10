function solution(s1, s2) {
  var count = 0;
  var s1a = s1.split('');
  var s2a = s2.split('');
  for (var i = 0; i < s1a.length; i++) {
    for (var j = 0; j < s2a.length; j++) {
      if (s1a[i] === s2a[j]) {
        s2a.splice(j, 1);
        count++;
        break;
      }
    }
  }
  return count;
}

solution('aabca', 'adcaa');
