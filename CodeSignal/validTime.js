function solution(time) {
  const split = time.split(':');
  const hours = parseInt(split[0]);
  const min = parseInt(split[1]);
  if (hours > 23) return false;
  if (min > 59) return false;
  return true;
}

solution('23:51');
