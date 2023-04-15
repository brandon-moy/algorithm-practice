export default function makeAreaConsecutive2(statues) {
  var min = Math.min(...statues);
  var max = Math.max(...statues);
  var count = max - min - statues.length + 1;
  return count;
}
