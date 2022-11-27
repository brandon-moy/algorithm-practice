function solution(inputString) {
  const arr = inputString.split('.');
  if (arr.length !== 4) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) return false;
    if (!Number(arr[i]) && Number(arr[i]) !== 0) return false;
    if (Number(arr[i]) === 0 && arr[i].length !== 1) return false;
    if (arr[i].length > 1) {
      if (Number(arr[i][0]) === 0 && Number(arr[i][1]) !== 0) {
        return false;
      }
    }
    if (Number(arr[i]) > 255) return false;
  }
  return true;
}

solution('0000000');
