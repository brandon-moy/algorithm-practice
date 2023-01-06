function solution(address) {
  const split = address.split('@');
  if (split.length === 2) return split[1];
  return split[2];
}

solution('brandon@brandonmoy.com');
