function solution(picture) {
  var length = picture[0].length;
  var borderPic = [];
  var border = '';
  for (var i = 0; i < length + 2; i++) {
    border += '*';
  }
  for (var j = 0; j < picture.length; j++) {
    borderPic[j] = '*' + picture[j] + '*';
  }
  borderPic.unshift(border);
  borderPic.push(border);
  return borderPic;
}

var picture = ['abc',
  'ded'];

solution(picture);
// find the length of the first item
// length + 2 should be length of border
// iterate through array and concatenate value of array position with '*' before and after
// unshift and push a  line of '*' size equal to the length + 2
