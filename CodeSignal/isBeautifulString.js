function solution(inputString) {
  const arr = inputString.split('').sort();
  let count = 0;
  let lastCount = 0;
  let initial = true;
  let letter = 0;
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < arr.length - 1; i++) {
    count++;
    if (arr[i] !== alphabet[letter]) return false;
    if (arr[i] !== arr[i + 1] || i === arr.length - 2) {
      if (i === arr.length - 2 && arr[i] === arr[i + 1]) count++;
      else if (arr[i + 1] !== alphabet[letter + 1]) return false;
      if (count > lastCount && !initial) return false;

      initial = false;
      lastCount = count;
      count = 0;
      letter++;
    }
  }

  return true;
}

solution('bbbaacdafe');
