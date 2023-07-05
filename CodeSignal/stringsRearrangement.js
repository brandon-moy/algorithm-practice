export default function stringsRearrangement(inputArray) {
  if (!inputArray.length) return null;
  let result = false;

  function check(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let diffCounter = 0;
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] !== array[i + 1][j]) {
          diffCounter++;
        }
      }
      if (diffCounter !== 1) return false;
    }
    return true;
  }

  function loopArray(array, mergeArray) {
    if (mergeArray.length === inputArray.length) {
      return check(mergeArray);
    } else {
      for (const i in array) {
        if (
          loopArray(
            array.slice(0, +i).concat(array.slice(+i + 1, array.length)),
            [...mergeArray, array[i]]
          )
        ) {
          return true;
        }
      }
      return false;
    }
  }

  result = loopArray(inputArray, []);
  return result;
}
