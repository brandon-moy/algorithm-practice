export default function reverseInParentheses(inputString) {
  if (typeof inputString !== 'string') return null;
  while (true) {
    var close = inputString.indexOf(')');
    if (close === -1) break;
    var open = inputString.substring(0, close).lastIndexOf('(');
    var start = inputString.substring(0, open);
    var middle = inputString.substring(open + 1, close).split('').reverse().join('');
    var end = inputString.substring(close + 1, inputString.length);
    inputString = start + middle + end;
  }
  return inputString;
}
