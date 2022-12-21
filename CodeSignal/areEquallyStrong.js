function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft && yourRight === friendsRight) { // 7 * 1 = 0(7) ~= 0(1)
    return true; // 1 * 1 = 0(1)
  } else if (yourLeft === friendsRight && yourRight === friendsLeft) { // 7 * 1 = 0(7) ~= 0(1)
    return true; // 1 * 1 = 0(1)
  } else {
    return false; // 1 * 1 = 0(1)
  }
}

// Big O Notation: 0(1) constant time

solution(10, 15, 15, 10);
