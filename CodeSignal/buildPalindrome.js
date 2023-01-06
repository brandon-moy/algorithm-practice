function solution(st) {
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  let palindromeEnd = '';

  for (const char of st) {
    if (isPalindrome(st + palindromeEnd)) break;
    palindromeEnd = char + palindromeEnd;
  }
  return st + palindromeEnd;
}

solution('abbca');
