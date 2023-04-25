export default function chessBoardCellColor(cell1, cell2) {
  if (typeof cell1 !== 'string' | typeof cell2 !== 'string') return null;
  const group1 = ['A', 'C', 'E', 'G']; // 1 * 1 = 0(1)
  let cell1color = ''; // 1 * 1 = 0(1)
  let cell2color = ''; // 1 * 1 = 0(1)
  if (group1.includes(cell1[0])) { // 3 * 1 = 0(3) ~= 0(1)
    if (parseInt(cell1[1] % 2)) { // 4 * 1 = 0(4) ~= 0(1)
      cell1color = 'tan'; // 1 * 1 = 0(1)
    } else {
      cell1color = 'brown'; // 1 * 1 = 0(1)
    }
  } else {
    if (parseInt(cell1[1] % 2)) { // 4 * 1 = 0(4) ~= 0(1)
      cell1color = 'brown'; // 1 * 1 = 0(1)
    } else {
      cell1color = 'tan'; // 1 * 1 = 0(1)
    }
  }
  if (group1.includes(cell2[0])) { // 3 * 1 = 0(3) ~= 0(1)
    if (parseInt(cell2[1] % 2)) { // 4 * 1 = 0(4) ~= 0(1)
      cell2color = 'tan'; // 1 * 1 = 0(1)
    } else {
      cell2color = 'brown'; // 1 * 1 = 0(1)
    }
  } else {
    if (parseInt(cell2[1] % 2)) { // 4 * 1 = 0(4) ~= 0(1)
      cell2color = 'brown'; // 1 * 1 = 0(1)
    } else {
      cell2color = 'tan'; // 1 * 1 = 0(1)
    }
  }
  if (cell1color === cell2color) { // 3 * 1 = 0(3) ~= 0(1)
    return true; // 1 * 1 = 0(1)
  }
  return false; // 1 * 1 = 0(1)
}

// Big O Notation: 0(1) constant time
