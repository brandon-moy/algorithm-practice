function solution(picture) {
  var length = picture[0].length; // 3 * 1 = 0(3) ~= 0(1)
  var borderPic = []; // 1 * 1 = 0(1)
  var border = ''; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < length + 2; // 2 * n = 0(2n) ~= 0(m)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    border += '*'; // 2 * n = 0(2n) ~= 0(n)
  }
  for (
    var j = 0; // 1 * 1 = 0(1)
    j < picture.length; // 2 * n = 0(2n) ~= 0(m)
    j++) { // 2 * n = 0(2n) ~= 0(m)
    borderPic[j] = '*' + picture[j] + '*'; // 3 * n = 0(3n) ~= 0(n)
  }
  borderPic.unshift(border); // 2 * 1 = 0(2) ~= 0(1)
  borderPic.push(border); // 2 * 1 = 0(2) ~= 0(1)
  return borderPic; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

var picture = ['abc',
  'ded'];

solution(picture);
// find the length of the first item
// length + 2 should be length of border
// iterate through array and concatenate value of array position with '*' before and after
// unshift and push a  line of '*' size equal to the length + 2
