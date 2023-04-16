export default function makeAreaConsecutive2(statues) {
  for (var i = 0; i < statues.length; i++) {
    if (typeof statues[i] !== 'number') return null;
  }
  var min = Math.min(...statues);
  var max = Math.max(...statues);
  var count = max - min - statues.length + 1;
  return count;
}
