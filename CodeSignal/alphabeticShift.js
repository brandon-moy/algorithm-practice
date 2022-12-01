function solution(inputString) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let output = '';
  for (let i = 0; i < inputString.length; i++) {
    let position = alphabet.indexOf(inputString[i]) + 1;
    if (position === 26) {
      position = 0;
    }
    output += alphabet[position];
  }
  return output;
}

solution('crazy');
