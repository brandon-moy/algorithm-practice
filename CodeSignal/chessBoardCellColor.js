function solution(cell1, cell2) {
  const group1 = ['A', 'C', 'E', 'G'];
  let cell1color = '';
  let cell2color = '';
  if (group1.includes(cell1[0])) {
    if (parseInt(cell1[1] % 2)) {
      cell1color = 'tan';
    } else {
      cell1color = 'brown';
    }
  } else {
    if (parseInt(cell1[1] % 2)) {
      cell1color = 'brown';
    } else {
      cell1color = 'tan';
    }
  }
  if (group1.includes(cell2[0])) {
    if (parseInt(cell2[1] % 2)) {
      cell2color = 'tan';
    } else {
      cell2color = 'brown';
    }
  } else {
    if (parseInt(cell2[1] % 2)) {
      cell2color = 'brown';
    } else {
      cell2color = 'tan';
    }
  }
  if (cell1color === cell2color) return true;
  return false;
}

solution('A1', 'H3');
