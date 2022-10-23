function solution(inputString) {
  const arrStr = inputString.split('').sort();
  let count = 0;
  let i = 0;
  while (i < arrStr.length) {
    if (arrStr[i] === arrStr[i + 1]) {
      count++;
      i += 2;
    } else i++;
  }
  return count === Math.floor(arrStr.length / 2);
}

solution('aabb');
