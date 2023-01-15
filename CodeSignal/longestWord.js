function solution(text) {
  let newText = ''; // 1 * 1 = 0(1)
  const alphabet = 'abcdefghijklmnopqrstuvwxyz '.split(''); // 3 * 1 = 0(3) ~= 0(1)
  for (
    let i = 0; // 1 * 1 = 0(1)
    i < text.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (alphabet.includes(text[i].toLowerCase())) { // 4 * n = 0(4n) ~= 0(n)
      newText += text[i]; // 3 * n = 0(3n) ~= 0(n)
    } else {
      newText += ' '; // 3 * n = 0(3n) ~= 0(n)
    }
  }
  const splitText = newText.split(' '); // 3 *  = 0(3) ~= 0(1)
  if (splitText.length === 1) { // // 2 * 1 = 0(2) ~= 0(1)
    return splitText[0]; // 1 * 1 = 0(1)
  }
  let output = splitText[0]; // 2 * 1 = 0(2) ~= 0(1)
  for (let i = 1; // 1 * 1 = 0(1)
    i < splitText.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (splitText[i].length > output.length) { // 4 * n = 0(4n) ~= 0(n)
      output = splitText[i]; // 3 * n = 0(3n) ~= 0(n)
    }
  }
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution('Ready, steady, go!');
