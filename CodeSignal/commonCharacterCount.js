export default function commonCharacterCount(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return null;
  var count = 0; // 1 * 1 = 0(1)
  var s1a = s1.split(''); // 3 * 1 = 0(3) ~= 0(1)
  var s2a = s2.split(''); // 3 * 1 = 0(3) ~= 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < s1a.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    for (
      var j = 0; // 1 * n = 0 (n)
      j < s2a.length; // 2 * n * n = 0(2n^2) ~= 0(n^2)
      j++) { // 2 * n * n = 0(2n^2) ~= 0(n^2)
      if (s1a[i] === s2a[j]) { // 3 * n * n = 0(3n^2) ~= 0(n^2)
        s2a.splice(j, 1); // ? * n * n = 0(?n^2) ~= 0(n^2)
        count++; // 2 * n * n = 0(2n^2) ~= 0(n^2)
        break; // 1 * n * n = 0(n^2)
      }
    }
  }
  return count; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n^2) quadratic time
