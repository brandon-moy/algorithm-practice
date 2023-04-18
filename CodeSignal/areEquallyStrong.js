export default function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (typeof yourLeft !== 'number' || typeof yourRight !== 'number' || typeof friendsLeft !== 'number' || typeof friendsRight !== 'number') return null;
  if (isNaN(yourLeft) || isNaN(yourRight) || isNaN(friendsLeft) || isNaN(friendsRight)) return null;
  if (yourLeft === friendsLeft && yourRight === friendsRight) { // 7 * 1 = 0(7) ~= 0(1)
    return true; // 1 * 1 = 0(1)
  } else if (yourLeft === friendsRight && yourRight === friendsLeft) { // 7 * 1 = 0(7) ~= 0(1)
    return true; // 1 * 1 = 0(1)
  } else {
    return false; // 1 * 1 = 0(1)
  }
}

// Big O Notation: 0(1) constant time
