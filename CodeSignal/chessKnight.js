function solution(cell) {
  let moves = 8;
  if (cell[0] === 'a' || cell[0] === 'h') moves -= 4;
  if (cell[0] === 'b' || cell[0] === 'g') moves -= 2;
  if (cell[1] === '1' || cell[1] === '8') {
    if (cell[0] === 'a' || cell[0] === 'h') {
      moves -= 2;
    } else if (cell[0] === 'g' || cell[0] === 'b') {
      moves -= 3;
    } else {
      moves -= 4;
    }
  }
  if (cell[1] === '2' || cell[1] === '7') moves -= 2;

  return moves;
}

solution('a1');
