function solution(image) {
  const pixelArray = [];

  for (let i = 0; i < image.length - 2; i++) {
    const line = [];
    for (let j = 0; j < image[i].length - 2; j++) {
      let sum = 0;
      for (let a = i; a < i + 3; a++) {
        for (let b = j; b < j + 3; b++) {
          sum += image[a][b];
        }
      }
      line.push(Math.floor(sum / 9));
    }
    pixelArray.push(line);
  }
  return pixelArray;
}

solution([[1, 1, 1], [1, 7, 1], [1, 1, 1]]);
