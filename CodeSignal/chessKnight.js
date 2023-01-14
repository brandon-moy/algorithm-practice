function solution(cell) {
  let moves = 8; // 1 * 1 = 0(1)
  if (cell[0] === 'a' || cell[0] === 'h') { // 6 * 1 = 0(6) ~= 0(1)
    moves -= 4; // 3 * 1 = 0(3) ~= 0(1)
  }
  if (cell[0] === 'b' || cell[0] === 'g') { // 6 * 1 = 0(6) ~= 0(1)
    moves -= 2; // 3 * 1 = 0(3) ~= 0(1)
  }
  if (cell[1] === '1' || cell[1] === '8') { // 6 * 1 = 0(6) ~= 0(1)
    if (cell[0] === 'a' || cell[0] === 'h') { // 6 * 1 = 0(6) ~= 0(1)
      moves -= 2; // 3 * 1 = 0(3) ~= 0(1)
    } else if (cell[0] === 'g' || cell[0] === 'b') { // 6 * 1 = 0(6) ~= 0(1)
      moves -= 3; // 3 * 1 = 0(3) ~= 0(1)
    } else {
      moves -= 4; // 3 * 1 = 0(3) ~= 0(1)
    }
  }
  if (cell[1] === '2' || cell[1] === '7') { // 6 * 1 = 0(6) ~= 0(1)
    moves -= 2; // 3 * 1 = 0(3) ~= 0(1)
  }

  return moves; // 1 * 1 = 0(1)
}

// Big O Notation: 0(1) constant time

solution('a1');
