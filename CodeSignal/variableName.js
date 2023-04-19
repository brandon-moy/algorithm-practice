function variableName(name) {
  const nameArray = name.split('');
  for (let i = 0; i < nameArray.length; i++) {
    if (i === 0 && isDigit(nameArray[i])) {
      return false;
    }
    if (!(isDigit(nameArray[i]) || isLetter(nameArray[i]) || isUnderscore(nameArray[i]))) { return false; }
  }
  return true;
}

function isDigit(char) {
  return '0123456789'.indexOf(char) !== -1;
}

function isUnderscore(char) {
  return '_'.indexOf(char) !== -1;
}

function isLetter(char) {
  if (typeof char !== 'string' || !char) return false;
  return char.toLowerCase() !== char.toUpperCase();
}

export { variableName, isDigit, isUnderscore, isLetter };
