function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft && yourRight === friendsRight) {
    return true;
  } else if (yourLeft === friendsRight && yourRight === friendsLeft) {
    return true;
  } else {
    return false;
  }
}

solution(10, 15, 15, 10);
