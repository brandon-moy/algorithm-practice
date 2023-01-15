function solution(text) {
  let newText = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz '.split('');
  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i].toLowerCase())) {
      newText += text[i];
    } else {
      newText += ' ';
    }
  }
  const splitText = newText.split(' ');
  if (splitText.length === 1) return splitText[0];
  let output = splitText[0];
  for (let i = 1; i < splitText.length; i++) {
    if (splitText[i].length > output.length) {
      output = splitText[i];
    }
  }
  return output;
}

solution('Ready, steady, go!');
